import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBankBranchesData = createAsyncThunk(
  'Test_Red/getBankBranchesData',
  async (_, thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      return thunkAPI.rejectWithValue('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  }
);

interface TestState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: TestState = {
  data: [],
  loading: false,
  error: null,
};

const testSlice = createSlice({
  name: 'Test_Red',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBankBranchesData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBankBranchesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getBankBranchesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default testSlice.reducer;
