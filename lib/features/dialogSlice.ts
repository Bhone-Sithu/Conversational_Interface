import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ChatDialogState {
    id : number
  }
  
  const initialState: ChatDialogState = {
    id: 1,
  };
export const ChatDialogSlice = createSlice({
    name: "chatDialog",
    initialState,
    reducers: {
        openChatDialog:(state,action:PayloadAction<number>) => {
            state.id = action.payload;
        }
    }
})
export const { openChatDialog } = ChatDialogSlice.actions;

export default ChatDialogSlice.reducer;