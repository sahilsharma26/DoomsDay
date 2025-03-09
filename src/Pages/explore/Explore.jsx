import { useEffect } from 'react';
import fetchDataFromApi from '../../utils/Api';

function Explore() {
	useEffect(() => {}, []);
	console.log(fetchDataFromApi('movies', 'discover/movie'));
	return <div>explore</div>;
}

export default Explore;
