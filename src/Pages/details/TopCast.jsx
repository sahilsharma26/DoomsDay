import Cast from './Cast';
import React from 'react';
import './style.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-loading-skeleton/dist/skeleton.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function TopCast({ data, isLoad }) {
	const SwiperOption = {
		slidesPerView: 1,
		spaceBetween: 20,
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
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1424: {
				slidesPerView: 6,
				spaceBetween: 30,
			},
		},
		modules: [Pagination],
		grabCursor: true,
	};
	return (
		<>
			<div className="top_cast">
				<p>Top Cast</p>
				{isLoad ? (
					<SkeletonTheme baseColor="#202020" highlightColor="#444">
						<Swiper {...SwiperOption}>
							{Array(8)
								.fill(0)
								.map((value, index) => {
									return (
										<SwiperSlide key={index}>
											<div className="cast_card">
												<div className="img">
													<Skeleton />
												</div>
												<div className="cast_info">
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
						{data.cast.map((value, index) => {
							return (
								<SwiperSlide key={index}>
									<Cast
										src={value.profile_path}
										name={value.name}
										character={value.character}
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

export default TopCast;
