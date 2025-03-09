import React from 'react';
import { useParams } from 'react-router-dom';
import DetailsBanner from './DetailsBanner';
import TopCast from './TopCast';
import fetchDataFromApi from '../../utils/Api';
import Recommendation from './Recommendation';
import OfficialVideos from './OfficialVideos';

function Details() {
	const params = useParams();
	const { data, isLoading } = fetchDataFromApi(
		`${params.type}/${params.id}`,
		`${params.type}/${params.id}`
	);
	const { isLoading: isLoad, data: info } = fetchDataFromApi(
		`${params.type}/${params.id}/credits`,
		`${params.type}/${params.id}/credits`
	);

	return (
		<>
			<div className="details">
				<DetailsBanner isLoad={isLoading} info={data?.data} data={info?.data} />
				<TopCast isLoad={isLoad} data={info?.data} />
				<OfficialVideos />
				<Recommendation title={'similar movies'} endpoint="similar" />
				<Recommendation endpoint="recommendations" title={'recommendation'} />
			</div>
		</>
	);
}

export default Details;
