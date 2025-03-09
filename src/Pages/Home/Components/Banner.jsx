import React, { useEffect, useState } from 'react';
import '../style.scss';
import { useNavigate } from 'react-router-dom';
import fetchDataFromApi from '../../../utils/Api';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Banner() {
	const { isLoading, isError, error, data } = fetchDataFromApi(
		'upcoming',
		'movie/upcoming'
	);
	const [query, setQuery] = useState('');
	const navigate = useNavigate();
	function searchqueryHandler(e) {
		if (e.keyCode == 13 && query != '') {
			navigate(`/search/${query}`);
		}
	}
	useEffect(() => {
		const bgSrc = `https://image.tmdb.org/t/p/original${
			data?.data.results[Math.floor(Math.random() * 19)].backdrop_path
		}`;
		setBackground(bgSrc);
	}, [data]);

	const [background, setBackground] = useState('');
	return (
		<>
			<div className="hero_banner">
				<div className="backdrop_img">
					{!isLoading && (
						<LazyLoadImage src={background} className="" alt="" effect="blur" />
					)}
				</div>
				<div className="opacity_layer"></div>
				<div className="heroBannerContent">
					<span className="title">Welcome.</span>
					<span className="subtitle">
						Millions of movies, TV shows and people to discover. Explore now.
					</span>
					<div className="search_bar">
						<input
							type="text"
							value={query}
							onChange={(e) => {
								setQuery(e.target.value);
							}}
							placeholder="Search for a movie or a tv show ... "
							onKeyDown={(e) => {
								searchqueryHandler(e);
							}}
						></input>
						<button type="submit">Search</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Banner;
