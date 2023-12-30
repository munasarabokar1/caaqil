import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    addUsers: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    addCostumer: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/cost/add`,
        method: "POST",
        body: data,
      }),
    }),
    sendAndReg: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/inbox/update`,
        method: "POST",
        body: data,
      }),
    }),
    adeegyada: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/adeegyada/update`,
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/cost/update`,
        method: "POST",
        body: data,
      }),
    }),
    waitingList: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/waiting/del`,
        method: "POST",
        body: data,
      }),
    }),
    homePage: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/view`,
        method: "GET",
      }),
    }),
    transController: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/trans/post`,
        method: "POST",
        body: data,
      }),
    }),
    updateUserInfo: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile/update`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useUpdateUserMutation,
  useHomePageMutation,
  useAddCostumerMutation,
  useSendAndRegMutation,
  useTransControllerMutation,
  useAdeegyadaMutation,
  useWaitingListMutation,
  useUpdateUserInfoMutation,
  useAddUsersMutation,
} = userApiSlice;
