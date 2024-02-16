import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryReauth } from './base-query-reauth'

export const userQuery = createApi({
  reducerPath: 'userQuery',
  tagTypes: ['user'],

  baseQuery: baseQueryReauth,

  endpoints: (build) => ({
    // получить текущего пользователя
    getUser: build.query({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
      providesTags: [{ type: 'user' }],
    }),

    // получить всех пользователей
    getUsersAll: build.query({
      query: () => `/user/all`,
      providesTags: [{ type: 'user' }],
    }),

    // добавить аватар пользователя
    postAvatar: build.mutation({
      query: (data) => {
        const formData = new FormData()
        if (data) {
          formData.append('file', data)
        }
        return {
          url: '/user/avatar',
          method: 'POST',
          body: formData,
        }
      },
      invalidatesTags: [{ type: 'user' }],
    }),

    updateUserData: build.mutation({
      query: (body) => ({
        url: '/user',
        method: 'PATCH',
        body,
        headers: {
          'content-type': 'application/json',
        },
      }),
      invalidatesTags: [{ type: 'user' }],
    }),

    updateUserPassword: build.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: '/user/password',
        method: 'PUT',
        body: JSON.stringify({ password_1: oldPassword, password_2: newPassword }),
        headers: {
          'content-type': 'application/json',
        },
        invalidatesTags: [{ type: 'user' }],
      }),
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetUsersAllQuery,
  usePostAvatarMutation,
  useUpdateUserDataMutation,
  useUpdateUserPasswordMutation,
} = userQuery
