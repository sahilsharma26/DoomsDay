import { configureStore } from '@reduxjs/toolkit';
import GenreSlice from './GenreSlice';

const store = configureStore({
	reducer: {
		genre: GenreSlice,
	},
});

export default store;
