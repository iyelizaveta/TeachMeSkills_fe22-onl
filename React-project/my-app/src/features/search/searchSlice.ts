import { createSlice } from "@reduxjs/toolkit";
import { SearchPayload, SearchSuccess } from "./types";

const searchSlice = createSlice({
  name: "search",
  initialState: { response: null } as { response: SearchSuccess | null },
  reducers: {
    search(state, action: { payload: SearchPayload }) {},
    searchSuccess(state, action: { payload: SearchSuccess }) {
      state.response = action.payload;
    },
    searchFailure(state, action: { payload: string }) {},
    reset(state) {
      state.response = null;
    },
  },
});

export const { actions } = searchSlice;
export default searchSlice.reducer;
