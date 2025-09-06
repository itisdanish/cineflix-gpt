import { createSlice } from '@reduxjs/toolkit';

// 🔹 Create a user slice of state
const userSlice = createSlice({
  name: 'user', // Name of the slice (appears in Redux DevTools)
  initialState: null, // Initial state (no user logged in)
  reducers: {
    // Action to add/set a user
    addUser: (state, action) => action.payload,

    // Action to remove/clear a user
    removeUser: (state, action) => null,
  },
});

// 🔹 Export actions so they can be dispatched in components
export const { addUser, removeUser } = userSlice.actions;

// 🔹 Export reducer (default export) to be included in the store
export default userSlice.reducer;
