const { baseApi } = require("../../api/baseApi");

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/user/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (registerData) => {
        console.log(registerData);
        return {
          url: "/user/register-user",
          method: "POST",
          body: registerData,
        };
      },
    }),
    searchUsers: builder.query({
      query: (searchTerm) => {
        const queryParams = {};
        if (searchTerm) {
          queryParams.searchTerm = searchTerm;
        }
        return {
          url: `/user/search`,
          method: "GET",
          params: queryParams,
        };
      },
    }),
    getMyConversations: builder.query({
      query: () => {
        return {
          url: "/conversations/get-my-chats",
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useSearchUsersQuery,
  useGetMyConversationsQuery,
} = authApi;
