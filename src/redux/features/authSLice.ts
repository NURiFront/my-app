import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = process.env.NEXT_PUBLIC_API_URL!;

interface initialStateTypes {
	data: User[];
	loading: boolean;
	error: string | null;
}

const initialState: initialStateTypes = {
	data: [],
	loading: false,
	error: null
};

export const getUser = createAsyncThunk('get/user', async () => {
	const response = await axios.get(url);
	return response.data;
});

export const postUser = createAsyncThunk(
	'post/user',
	async (payload: User, { rejectWithValue }) => {
		try {
			const response = await axios.post(url, payload);
			return response.data;
		} catch (error) {
			rejectWithValue(error);
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(getUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Error get authSlice';
			})
			.addCase(postUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(postUser.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(postUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Error post authSlice';
			});
	}
});
export default authSlice.reducer;
