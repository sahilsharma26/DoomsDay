import 'swiper/css';
import 'swiper/css/pagination';
import 'react-loading-skeleton/dist/skeleton.css';

import React, { useState } from 'react';
import SwitchTabs from './SwitchTabs';
import Poster from './Poster';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import fetchDataFromApi from '../../../utils/Api';

function Popular({ endPoint, title, options }) {
	const [query, setQuery] = useState(options[0]);

	function getQuery(data) {
		setQuery(data);
	}
	const { isLoading, data } = fetchDataFromApi(
		`${query}/${endPoint}`,
		`${query}/${endPoint}`
	);
	const SwiperOption = {
		slidesPerView: 1,
		spaceBetween: 10,
		keyboard: {
			enabled: true,
		},
		mousewheel: true,
		breakpoints: {
			500: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			924: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1424: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		},
		modules: [Pagination],
		grabCursor: true,
	};
	return (
		<>
			<div className="content_grid">
				<div className="content">
					<p>{title}</p>
					<SwitchTabs getquery={getQuery} options={options} />
				</div>

				{isLoading ? (
					<SkeletonTheme baseColor="#202020" highlightColor="#444">
						<Swiper {...SwiperOption}>
							{Array(6)
								.fill(0)
								.map((value, index) => {
									return (
										<SwiperSlide key={index}>
											<div className="poster_grid">
												<div className="poster">
													<Skeleton height={400} />
													<div className="desc">
														<Skeleton />
													</div>
												</div>
												<div className="details">
													<Skeleton />
													<Skeleton />
												</div>
											</div>
										</SwiperSlide>
									);
								})}
						</Swiper>
					</SkeletonTheme>
				) : (
					<Swiper {...SwiperOption}>
						{(data?.data.results).map((value, index) => {
							return (
								<SwiperSlide key={index}>
									<Poster
										title={value.title || value.name}
										date={value.release_date || value.first_air_date}
										rating={value.vote_average.toFixed(1)}
										src={value.poster_path}
										media={query}
										id={value.id}
										genre_id={value.genre_ids}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				)}
			</div>
		</>
	);
}

export default Popular;
