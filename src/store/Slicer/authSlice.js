// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { account } from '../config'; // Import your authentication-related configuration
import { account } from '../../config';
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      // Call your authentication API to login the user
      const response = await account.createEmailSession(
        credentials.email,
        credentials.password
      );
      // Return the user data or token if needed
      return response;
    } catch (error) {
      // Handle errors here
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
