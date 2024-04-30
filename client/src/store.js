
import { configureStore } from '@reduxjs/toolkit';

import signUpSlice from './reduce/authentication/signUpReducer';
const store = configureStore({
  reducer: {
    userSignUp:signUpSlice,

// import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {

  
  },
});

export default store;