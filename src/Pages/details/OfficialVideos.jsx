import React from 'react';
import './style.scss';
import Video from './Video';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import fetchDataFromApi from '../../utils/Api';

function OfficialVideos() {
	const params = useParams();
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
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
		modules: [Pagination],
	};
	const { isLoading, data } = fetchDataFromApi(
		`${params.type}/${params.id}/videos `,
		`${params.type}/${params.id}/videos`
	);

	return (
		<>
			<div className="video_section">
				<p>official videos</p>
				<div className="videos">
					{isLoading ? (
						<SkeletonTheme baseColor="#202020" highlightColor="#444">
							<Swiper {...SwiperOption}>
								{Array(5)
									.fill(0)
									.map((value, index) => {
										<SwiperSlide key={index}>
											<div className="video_grid">
												<div className="video">
													<Skeleton />
												</div>
												<p className="title">
													<Skeleton />
												</p>
											</div>
										</SwiperSlide>;
									})}
							</Swiper>
						</SkeletonTheme>
					) : (
						<Swiper {...SwiperOption}>
							{(data?.data.results).map((value, index) => {
								return (
									<SwiperSlide key={index}>
										<Video title={value.name} keyId={value.key} />
									</SwiperSlide>
								);
							})}
						</Swiper>
					)}
				</div>
			</div>
		</>
	);
}

export default OfficialVideos;
