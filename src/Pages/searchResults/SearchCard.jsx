import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic from '../../assets/no-poster.png';

function SearchCard({ name, title, src, media_type, id, date }) {
	const navigate = useNavigate();
	return (
		<>
			<div
				className="search_card"
				onClick={() => {
					navigate(`/${media_type}/${id}`);
				}}
			>
				<img
					src={src ? `https://image.tmdb.org/t/p/original${src}` : pic}
				></img>
				<div className="info">
					<p className="title" title={name || title}>
						{name || title}
					</p>
					<p className="date">
						{new Intl.DateTimeFormat('en-US', {
							month: 'short',
							day: 'numeric',
							year: 'numeric',
						}).format(new Date(date || '2023-12-14'))}
					</p>
				</div>
			</div>
		</>
	);
}

export default SearchCard;
