import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi2 = createApi({
  reducerPath: "baseApi2",
  baseQuery: fetchBaseQuery({ baseUrl: "https://demo.webcodecare.com/api" }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

