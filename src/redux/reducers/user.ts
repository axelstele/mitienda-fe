import { createSlice, createAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface UserState {
  name: string | null,
  email: string | null,
  phone: string | null
}

// Define the initial state using that type
const initialState: UserState = {
  name: null,
  email: null,
  phone: null,
};

const login = createAction<{ email: string, password: string }>('user/login');
const logout = createAction('user/logout');
const register = createAction<{ name: string, email: string, url: string, password: string }>('user/register');
const get = createAction<{ company: string }>('user/get');

export const user = {
  login,
  logout,
  register,
  get,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },
});

export default userSlice.reducer;
