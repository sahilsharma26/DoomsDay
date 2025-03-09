import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchDataFromApi from '../../utils/Api';
import './style.scss';
import SearchCard from './SearchCard';

function Search() {
	const { query } = useParams();
	const [pageNum, setPageNum] = useState(1);
	const { isLoading, data, isError, error } = fetchDataFromApi(
		`/search/${query}`,
		`search/multi?query=${query}&page=${pageNum}`
	);
	return (
		<div className="search_grid">
			<div className="heading">
				<p>Search Results for '{query}'</p>
			</div>
			<div className="search_results">
				{isLoading
					? ''
					: data?.data.results.map((value, index) => {
							if (['movie', 'tv'].includes(value.media_type)) {
								return (
									<SearchCard
										name={value.name}
										title={value.title}
										src={value.poster_path}
										media_type={value.media_type}
										id={value.id}
										date={value.first_air_date}
									/>
								);
							}
					  })}
			</div>
		</div>
	);
}

export default Search;
