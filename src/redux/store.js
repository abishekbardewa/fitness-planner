import { configureStore } from '@reduxjs/toolkit';
import workoutSlice from './workoutSlice';

// Create a Redux store using the configureStore function.
const store = configureStore({
	reducer: {
		workout: workoutSlice,
	},
});

export default store;
