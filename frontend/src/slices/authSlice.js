import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage.getItem('userInfo') === null
    ? null // If localStorage key doesn't exist, set userInfo to null
    : localStorage.getItem('userInfo') // Otherwise, use the existing value
      ? JSON.parse(localStorage.getItem('userInfo')) // Try to parse as JSON
      : {}, // If parsing fails, set userInfo to an empty object
};
// console.log(authSlice.reducer)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions; // when you call this is action

export default authSlice.reducer; // when it changes the state its reducer