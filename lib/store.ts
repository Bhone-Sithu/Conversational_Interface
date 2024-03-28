import { configureStore, PayloadAction } from '@reduxjs/toolkit'
import ChatDialogReducer  from './features/dialogSlice'
import UserDataReducer from './features/userDataSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
        chatDialog: ChatDialogReducer,
        userData: UserDataReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const store = makeStore();