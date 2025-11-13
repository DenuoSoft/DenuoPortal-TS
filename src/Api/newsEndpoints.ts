import { EndpointBuilder } from '@reduxjs/toolkit/query';

export const newsEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  
  getNews: builder.query({
    query: () => '/api/news',
    providesTags: ['News'],
  }),

  createNews: builder.mutation({
    query: (results) => ({
      url: '/api/news',
      method: 'POST',
      body: results,
    }),
    invalidatesTags: ['News'],
  }),

  deleteNews: builder.mutation({
    query: (id) => ({
      url: `/api/news/${id}`,
      method: 'DELETE',
    }),
    invalidatesTags: ['News'],
  })
})