import { baseApi2 } from "../../api/ExtraApi";

const authApi = baseApi2.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (registerData) => {
        console.log(registerData);
        return {
          url: "/register",
          method: "POST",
          body: registerData,
        };
      },
    }),
    
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
} = authApi;
