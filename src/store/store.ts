import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice'
import messageReducer from './slices/messageSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
