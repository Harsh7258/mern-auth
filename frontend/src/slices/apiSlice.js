import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '' }); // empty '' because of proxy server set in vite.config file

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'], // cache user once dont fetch every time 
  endpoints: (builder) => ({}),
});