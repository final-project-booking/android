
import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
import searchHotelReducer from './SliceAction/SearchHotel';
const store = configureStore({
  reducer: {
  hotel:searchHotelReducer
  },
});

export default store;