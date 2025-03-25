import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGenre = createAsyncThunk('genre/add', async () => {
	try {
		const dummy = {};
		const promise = [];
		['movie', 'tv'].map((value) => {
			promise.push(
				axios.get(`https://api.themoviedb.org/3/genre/${value}/list`, {
					headers: {
						accept: 'application/json',
						Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_TOKEN}`,
					},
				})
			);
		});

		const responses = await Promise.all(promise);
		responses.forEach((value) => {
			value.data.genres.forEach((val) => {
				return (dummy[val.id] = val.name);
			});
		});
		return dummy;
	} catch (err) {
		console.log(err);
	}
});

const GenreSlice = createSlice({
	name: 'genre',
	initialState: {},
	reducers: {
		add(state, action) {
			return action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGenre.pending, (state, action) => {
				return state;
			})
			.addCase(fetchGenre.fulfilled, (state, action) => {
				return action.payload;
			})
			.addCase(fetchGenre.rejected, (state, action) => {
				return state;
			});
	},
});

export const { add } = GenreSlice.actions;
export default GenreSlice.reducer;
