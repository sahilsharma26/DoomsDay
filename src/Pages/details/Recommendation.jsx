import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'swiper/css';
import 'swiper/css/pagination';
import 'react-loading-skeleton/dist/skeleton.css';
import Poster from '../Home/Components/Poster';
import { useParams } from 'react-router-dom';
import fetchDataFromApi from '../../utils/Api';

function Recommendation({ title, endpoint }) {
	const params = useParams();

	const { isLoading, data } = fetchDataFromApi(
		`${params.type}/${params.id}/${endpoint}`,
		`${params.type}/${params.id}/${endpoint}`
	);
	const SwiperOption = {
		slidesPerView: 1,
		grabCursor: true,
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
	};
	return (
		<div className="recommend">
			<p>{title}</p>
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
									media={value.media_type || params.type}
									id={value.id}
									genre_id={value.genre_ids}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			)}
		</div>
	);
}

export default Recommendation;
