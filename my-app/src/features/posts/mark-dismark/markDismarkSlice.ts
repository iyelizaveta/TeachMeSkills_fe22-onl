import { createSlice } from "@reduxjs/toolkit";

const markDismarkSlice = createSlice({
  name: "markDismark",
  initialState: {} as Record<string | number, { state: boolean }>,
  reducers: {
    setMarkPost(
      state,
      { payload }: { payload: { id: string | number; state: boolean } }
    ) {
      if (payload.state === true) {
        state[payload.id] = { state: true };
      } else if (payload.state === false) {
        state[payload.id] = { state: false };
      }
    },
  },
});

export const { setMarkPost } = markDismarkSlice.actions;
export default markDismarkSlice.reducer;
