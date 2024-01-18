import { createSlice } from "@reduxjs/toolkit";
import { puppyBowlApi } from "../api/puppyBowlApi";

const playersSlice = createSlice({
  name: "players",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      puppyBowlApi.endpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        return payload.results;
      }
    );
  },
});

export default playersSlice.reducer;
