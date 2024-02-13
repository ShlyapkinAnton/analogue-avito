import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth } from '../store/slices/auth'

export const baseQueryReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8090/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access
      console.debug('Использую токен из стора', { token })
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  })

  const result = await baseQuery(args, api, extraOptions)
  console.debug('Результат первого запроса', { result })

  if (result?.error?.status !== 401) {
    return result
  }

  const forceLogout = () => {
    console.debug('Принудительная авторизация!')
    api.dispatch(setAuth(''))
    localStorage.clear()
    console.debug('Принудительная авторизация!')
  }

  const { auth } = api.getState()
  console.debug('Данные пользователя в сторе', { auth })

  if (!auth.refresh) {
    return forceLogout()
  }

  const refreshResult = await baseQuery(
    {
      url: 'auth/login/',
      method: 'PUT',
      body: {
        access_token: auth.access,
        refresh_token: auth.refresh,
      },
      headers: {
        'content-type': 'application/json',
      },
    },
    api,
    extraOptions,
  )

  console.debug('Результат запроса на обновление токена', { refreshResult })
  if (!refreshResult?.data.access) {
    return forceLogout()
  }

  api.dispatch(
    setAuth({
      ...auth,
      access: refreshResult.data?.access,
    }),
  )
  const retryResult = await baseQuery(args, api, extraOptions)
  if (retryResult?.error?.status === 401) {
    return forceLogout()
  }

  console.debug('Повторный запрос завершился успешно')
  return retryResult
}
