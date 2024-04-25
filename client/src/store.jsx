
import { configureStore } from '@reduxjs/toolkit';
import { signUpSlice } from './SliceAction/authentication/signUpSlice';
const store = configureStore({
  reducer: {
    userSignUp:signUpSlice
  },
});

export default store;