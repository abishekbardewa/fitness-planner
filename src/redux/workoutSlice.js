import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state for the workout slice.
const initialState = {
	loading: false,
	data: null,
	error: null,
};

// Asynchronous thunk action to fetch workout data.
export const getWorkout = createAsyncThunk('workout/getWorkout', async (args) => {
	const { age, plan, gender, fitnessLevel, targetMuscle, duration } = args;
	try {
		// Fetch workout data from a JSON endpoint using Axios.
		const { data } = await axios.get('/mock/mock.json');

		// Filter the fetched data based on specified criteria.
		const filteredData = data.filter((item) => {
			return (
				item.age === parseInt(age) &&
				item.plan === plan &&
				item.gender === gender &&
				item.fitnessLevel === fitnessLevel &&
				item.targetMuscle === targetMuscle &&
				item.duration === parseInt(duration)
			);
		});
		return filteredData;
	} catch (error) {
		throw new Error(error.message);
	}
});
// Create a workout slice using createSlice from Redux Toolkit.
export const workoutSlice = createSlice({
	name: 'workout',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// Handle the pending state when fetching data.
			.addCase(getWorkout.pending, (state) => {
				state.loading = true;
			})
			// Handle the fulfilled state when fetching data is successful.
			.addCase(getWorkout.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
				state.error = null;
			})
			// Handle the rejected state when fetching data encounters an error.
			.addCase(getWorkout.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});
export default workoutSlice.reducer;
