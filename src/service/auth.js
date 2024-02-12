import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authQuery = createApi({
    reducerPath: 'authQuery',
    tagTypes: ['AUTH'],

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8090/'
    }),

    endpoints: (build) => ({
        login: build.mutation({
            query: (body) => ({
                url: 'auth/login/',
                method: 'POST',
                body,
                headers: {
                    'content-type': 'application/json'
                },
                invalidatesTags: [{ type: 'AUTH', id: 'LIST' }]
            })
        }),
        registration: build.mutation({
            query: (body) => ({
                url: 'auth/register/',
                method: 'POST',
                body,
                headers: {
                    'content-type': 'application/json'
                },
                invalidatesTags: [{ type: 'AUTH', id: 'LIST' }]
            })
        })
    })
})

export const { useLoginMutation, useRegistrationMutation } = authQuery