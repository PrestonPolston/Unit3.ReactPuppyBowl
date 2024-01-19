import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2311-fsa-et-web-ft-sf",
  }),
  endpoints: (builder) => ({
    getPlayers: builder.query({ query: () => "/players" }),
    getPlayer: builder.query({ query: (id) => `/players/${id}` }),
    addPlayer: builder.mutation({
      query: (playerData) => ({
        url: "/players",
        method: "POST",
        body: playerData,
      }),
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useGetPlayerQuery,
  useAddPlayerMutation,
  useDeletePlayerMutation,
} = puppyBowlApi;
