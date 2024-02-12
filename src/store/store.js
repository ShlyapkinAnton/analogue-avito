import { configureStore } from '@reduxjs/toolkit'
import adsReducer from './slices/ads'
import authReducer from './slices/auth'
import { adsQuery } from '../service/ads'
import { authQuery } from '../service/auth'
import { userQuery } from '../service/user'

export const store = configureStore({
  reducer: {
    ads: adsReducer,
    auth: authReducer,
    [adsQuery.reducerPath]: adsQuery.reducer,
    [authQuery.reducerPath]: authQuery.reducer,
    [userQuery.reducerPath]: userQuery.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(adsQuery.middleware)
      .concat(authQuery.middleware)
      .concat(userQuery.middleware),
})
