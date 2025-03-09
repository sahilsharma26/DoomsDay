import React from 'react';
import './style.scss';
import pic from '../../assets/avatar.png';

function Cast({ src, name, character }) {
	return (
		<div className="cast_card">
			<img
				className="img"
				src={src ? `https://image.tmdb.org/t/p/original/${src}` : pic}
			></img>
			<div className="cast_info">
				<p>{name}</p>
				<p>{character}</p>
			</div>
		</div>
	);
}

export default Cast;
