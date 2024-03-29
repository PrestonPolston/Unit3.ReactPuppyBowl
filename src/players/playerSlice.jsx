import { createSlice } from "@reduxjs/toolkit";
import { puppyBowlApi } from "../api/puppyBowlApi";

const playerSlice = createSlice({
  name: "player",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      puppyBowlApi.endpoints.getPlayer.matchFulfilled,
      (state, { payload }) => {
        return payload.results;
      }
    );
  },
});

export default playerSlice.reducer;
