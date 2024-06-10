import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversationHistory: {},
  error: null,
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setConversationHistory: (state, action) => {
      state.conversationHistory = action.payload;
    },
    setConversationError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setConversationHistory, setConversationError } =
  conversationSlice.actions;

export default conversationSlice.reducer;
