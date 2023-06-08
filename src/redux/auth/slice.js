import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const fulfilledRegOrLogInReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const fulfilledLogOutReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const fulfilledRefreshReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const pendingRefreshingReducer = state => {
  state.isRefreshing = true;
};

const rejectedRefreshinfReducer = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, fulfilledRegOrLogInReducer)
      .addCase(logIn.fulfilled, fulfilledRegOrLogInReducer)
      .addCase(logOut.fulfilled, fulfilledLogOutReducer)
      .addCase(refreshUser.pending, pendingRefreshingReducer)
      .addCase(refreshUser.fulfilled, fulfilledRefreshReducer)
      .addCase(refreshUser.rejected, rejectedRefreshinfReducer);
  },
});
export const authReducer = authSlice.reducer;
