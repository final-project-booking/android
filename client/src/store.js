
import { configureStore } from '@reduxjs/toolkit';
// // import counterReducer from './counterSlice';


const store = configureStore({
  reducer: { 
    // counter: counterReducer,
    // Add other reducers here
  },
});

export default store;