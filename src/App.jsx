import './App.scss';
import Home from './Pages/Home/Home';
import Search from './Pages/searchResults/Search';
import Explore from './Pages/explore/Explore';
import Details from './Pages/details/Details';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useDispatch } from 'react-redux';
import { fetchGenre } from './Store/GenreSlice';
import { useEffect } from 'react';
import PageError from './Pages/404/PageError';

function App() {
	const client = new QueryClient();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchGenre());
	}, []);

	return (
		<>
			<QueryClientProvider client={client}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/:type/:id" element={<Details />}></Route>
						<Route path="/search/:query" element={<Search />}></Route>
						<Route path="/explore/:mediaType" element={<Explore />}></Route>
						<Route path="*" element={<PageError />}></Route>
					</Routes>
					<Footer />
				</BrowserRouter>
			</QueryClientProvider>
		</>
	);
}

export default App;
