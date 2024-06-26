import { apiSlice } from "./apiSlice.js";
const USERS_URL = '/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            }),
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/`,
                method: 'POST',
                body: data
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            }),
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data
            })
        }),
        deleteUser: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/:userId`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useLoginMutation,
     useLogoutMutation, 
     useSignupMutation,
     useUpdateUserMutation, useDeleteUserMutation } = userApiSlice;