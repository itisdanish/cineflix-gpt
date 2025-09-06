import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // ✅ Import default export (reducer) from userSlice

// 🔹 Create the global Redux store
const appStore = configureStore({
  reducer: {
    // Register all slices here
    user: userReducer, // user slice state will be available at state.user
  },
});

export default appStore; // 🔹 Export store to provide it to the app
