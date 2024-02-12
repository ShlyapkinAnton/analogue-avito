import { createSlice } from '@reduxjs/toolkit'

const AUTH_INFO = 'auth'
function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_INFO))
  } catch (error) {
    console.error(error)
    return null
  }
}
const initialState = {
  access: '',
  refresh: '',
  email: '',
}

export const authSlice = createSlice({
  name: 'authReducer',
  initialState: getAuthFromLocalStorage() ?? initialState,
  reducers: {
    setAuth: (state, action) => {
      const payload = action.payload ?? initialState
      state.email = payload.email
      state.access = payload.access
      state.refresh = payload.refresh

      localStorage.setItem(AUTH_INFO, JSON.stringify(state))
    },
  },
})

export const { setAuth, logout } = authSlice.actions
export default authSlice.reducer
