import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT",
  }),
  endpoints: (builder) => ({
    getPlayers: builder.query({ query: () => "/players" }),
    getPlayer: builder.query({ query: (id) => `/players/${id}` }),
    query: (playerData) => ({
      url: "/players",
      method: "POST",
      body: playerData,
    }),
  }),
});

export const { useGetPlayersQuery, useGetPlayerQuery, useAddPlayerMutation } =
  puppyBowlApi;
