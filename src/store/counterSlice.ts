// src/features/counter/counterSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define the CounterState interface
export interface CounterState {
  value: number;
}

// Initial state for the counter
const initialState: CounterState = {
  value: 0,
};

// Define async actions using createAsyncThunk
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return 1;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const decrementAsync = createAsyncThunk(
  "counter/decrementAsync",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return -1;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Create the slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.value += action.payload;
      })
      .addCase(decrementAsync.fulfilled, (state, action) => {
        state.value += action.payload;
      });
  },
});

// Export actions and reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
