import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => `/users`,
      providesTags: ["Users"],
    }),
    fetchUser: builder.query({
      query: (id) => `/users${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useFetchUsersQuery, useFetchUserQuery } = usersApi;
