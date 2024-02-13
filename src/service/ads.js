import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryReauth } from './base-query-reauth'

export const adsQuery = createApi({
  reducerPath: 'adsQuery',
  tagTypes: ['ads', 'adsid', 'favAds', 'comments'],

  baseQuery: baseQueryReauth,

  endpoints: (build) => ({
    getAllAds: build.query({
      query: () => ({
        url: '/ads',
      }),
      providesTags: [{ type: 'ads' }],
    }),
    getAds: build.query({
      query: (id) => ({
        url: `/ads/${id}`,
      }),
      providesTags: [{ type: 'adsid' }],
    }),
    getComments: build.query({
      query: (id) => ({
        url: `/ads/${id}/comments`,
      }),
      providesTags: [{ type: 'comments' }],
    }),
    getAllUser: build.query({
      query: () => ({
        url: `/user/all`,
      }),
      providesTags: [{ type: 'ads' }],
    }),
    getUserAds: build.query({
      query: () => ({
        url: `/ads/me`,
      }),
      providesTags: [{ type: 'favAds' }],
    }),
    postTextAds: build.mutation({
      query: ({ title, description, price }) => ({
        url: `/adstext`,
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            price
        }),
        headers: { 'content-type': 'application/json' }
      }),
      invalidatesTags: [{ type: 'ads' }]
    }),
    postImgAds: build.mutation({
      query: ({ data, id }) => {
        const formData = new FormData()
        if (data) {
          formData.append('file', data)
        }
        return {
          url: `/ads/${id}/image`,
          method: 'POST',
          body: formData
        }
      },
      invalidatesTags: [{ type: 'ads' }]
    }),
    deleteFile: build.mutation({
      query({ id, file_url }) {
        return {
          url: `/ads/${id}/image`,
          params: `file_url=${file_url}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: [{ type: 'adsid' }]
    }),
    deleteAds: build.mutation({
      query(id) {
        return {
          url: `/ads/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: [{ type: 'ads' }]
    }),
    updateAds: build.mutation({
      query: ({ id, ...patch }) => ({
          url: `/ads/${id}`,
          method: 'PATCH',
          body: patch
      }),
      invalidatesTags: [{ type: 'ads' }]
    }),
    postComments: build.mutation({
      query: ({ id, text }) => ({
        url: `/ads/${id}/comments`,
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: { 'content-type': 'application/json' },
      }),
      invalidatesTags: [{ type: 'comments' }],
    }),
    
  }),
})

export const {
  useGetAllAdsQuery,
  useGetAdsQuery,
  useGetCommentsQuery,
  useGetAllUserQuery,
  useGetUserAdsQuery,
  usePostTextAdsMutation,
  usePostImgAdsMutation,
  useDeleteFileMutation,
  useDeleteAdsMutation,
  useUpdateAdsMutation,
  usePostCommentsMutation,
} = adsQuery
