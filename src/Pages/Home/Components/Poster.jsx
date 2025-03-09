import 'react-circular-progressbar/dist/styles.css';
import '../style.scss';

import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import pic from '../../../assets/no-poster.png';

function Poster({ title, date, rating, src, media, id, genre_id }) {
	const navigate = useNavigate();
	const results = useSelector((state) => state.genre);

	const formattedDate = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	}).format(new Date(date || '2023-12-14'));

	const CalculateRating = (rating) => {
		if (rating >= 8) {
			return '#22c55e';
		} else if (rating >= 7.5) {
			return '#f0ad4e';
		} else if (rating >= 6) {
			return '#f97316';
		} else {
			return '#dc2626';
		}
	};
	return (
		<div className="poster_grid" onClick={() => navigate(`/${media}/${id}`)}>
			<div className="poster">
				<img
					src={src ? `https://image.tmdb.org/t/p/original/${src}` : pic}
				></img>
				<div className="desc">
					<CircularProgressbar
						styles={{
							path: {
								stroke: CalculateRating(rating),
								strokeLinecap: 'butt',
							},
							trail: {
								stroke: '#fff',
								strokeLinecap: 'butt',
							},
							text: {
								fill: '#000',
								fontSize: '25px',
								fontWeight: 'bolder',
							},
							background: {
								fill: 'white',
							},
						}}
						background="true"
						className="rating"
						value={rating}
						maxValue={10}
						text={rating}
					/>
					<div className="tags">
						{genre_id?.slice(1, 3).map((value, index) => {
							return <p key={index}>{results[value]}</p>;
						})}
					</div>
				</div>
			</div>
			<div className="details">
				<p className="title">{title}</p>
				<p className="date">{formattedDate}</p>
			</div>
		</div>
	);
}

export default Poster;
