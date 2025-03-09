import React, { useState } from 'react';
import './style.scss';
import { PlayIcon } from './PlayBtn';
import { CircularProgressbar } from 'react-circular-progressbar';
import pic from '../../assets/no-poster.png';

function DetailsBanner({ isLoad, info, data }) {
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
	const director = data?.crew.filter((value) => value.job === 'Director');
	const Writer = data?.crew.filter((value) => value.job === 'Writer');
	return (
		<>
			{!isLoad ? (
				<div className="detailsBanner">
					<div className="backdrop_img">
						<img
							src={`https://image.tmdb.org/t/p/original/${
								info.backdrop_path || info.poster_path
							}`}
						></img>
					</div>

					<div className="img">
						<img
							src={
								info?.poster_path
									? `https://image.tmdb.org/t/p/original${info?.poster_path}`
									: pic
							}
						></img>
					</div>
					<div className="details">
						<p className="title">{info?.original_title || info.name}</p>
						<p className="tagline">{info?.tagline}</p>
						<div className="tags">
							{info?.genres.map((value, index) => {
								return <p key={index}>{value.name}</p>;
							})}
						</div>
						<div className="icon">
							<CircularProgressbar
								styles={{
									path: {
										stroke: CalculateRating(info.vote_average),
										strokeLinecap: 'butt',
									},
									trail: {
										stroke: 'transparent',
										strokeLinecap: 'butt',
									},
									text: {
										fill: '#fff',
										fontSize: '25px',
										fontWeight: 'bolder',
									},
									background: {
										fill: '#041226',
									},
								}}
								background="true"
								className="rating"
								value={info.vote_average.toFixed(1)}
								maxValue={10}
								text={info.vote_average.toFixed(1)}
							/>
							<div className="playbtn">
								<PlayIcon />
								<p>watch trailer</p>
							</div>
						</div>
						<div className="desc">
							<p className="title">Overview</p>
							<p className="overview">{info.overview}</p>
						</div>
						<div className="info">
							<div className="box1">
								{info.status && (
									<p className="container">
										<span>Status:</span>
										<span className="value">{info.status}</span>
									</p>
								)}
								{info.release_date && (
									<p className="container">
										<span>Released Date:</span>
										<span className="value">
											{Intl.DateTimeFormat('en-US', {
												month: 'short',
												day: 'numeric',
												year: 'numeric',
											}).format(new Date(info.release_date || '12-12-23'))}
										</span>
									</p>
								)}
								{info.runtime && (
									<p className="container">
										<span>Runtime:</span>
										<span className="value">
											{`${Math.floor(info.runtime / 60)}h ${
												info.runtime % 60
											}m`}
										</span>
									</p>
								)}
							</div>
							{director?.length ? (
								<div className="box1" style={{ justifyContent: 'start' }}>
									<p className="container">
										<span>Director:</span>
										{director.map((value, index) => {
											if (value.job === 'Director') {
												return (
													<span key={index} className="value">
														{value.name}
													</span>
												);
											}
										})}
									</p>
								</div>
							) : (
								''
							)}
							{Writer?.length ? (
								<div className="box1" style={{ justifyContent: 'start' }}>
									<p className="container">
										<span>Writer:</span>
										{data?.crew.map((value, index) => {
											if (value.job === 'Writer') {
												return (
													<span key={index} className="value">
														{value.name}
													</span>
												);
											}
										})}
									</p>
								</div>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
}

export default DetailsBanner;
