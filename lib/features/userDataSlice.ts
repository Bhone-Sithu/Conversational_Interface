import User, { Message } from "@/app/models/UserModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import mockData from "@/app/data/demo";
interface UserDataState {
    UserData : Array<User>
  }
  
  const initialState: UserDataState = {
    UserData:mockData
  };
export const UserDataSlice = createSlice({
    name: "UserData",
    initialState,
    reducers: {
        sendMessage:(state,action:PayloadAction<User>) => {
            const withoutUpdateUser = state.UserData.filter(user => user.id !== action.payload.id);
            state.UserData = [...withoutUpdateUser,action.payload];
        }
    }
})
export const { sendMessage } = UserDataSlice.actions;

export default UserDataSlice.reducer;