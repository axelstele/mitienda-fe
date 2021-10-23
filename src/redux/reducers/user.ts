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
const register = createAction<{ name: string, email: string, password: string }>('user/register');
const get = createAction<{ company: string }>('user/get');

export const user = {
  login,
  register,
  get,
};

export const counterSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
