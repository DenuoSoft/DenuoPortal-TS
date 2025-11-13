import { EndpointBuilder } from '@reduxjs/toolkit/query';

export const userEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  getUsers: builder.query({
			query: (params = {}) => ({
				url: '/api/accounts/users/',
				params: params,
			}),
			providesTags: ['User'],
		})
})