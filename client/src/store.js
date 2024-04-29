
import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
import ownerProfileReducer from './SliceAction/OwnerProfile'
const store = configureStore({
  reducer: {
    // counter: counterReducer,
    ownerProfile: ownerProfileReducer,
    
  },
});


// export type AppStore = ReturnType<typeof makeStore>
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
export default store;