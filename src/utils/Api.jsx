import axios from 'axios';
import { useQuery } from 'react-query';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const headers = {
	accept: 'application/json',
	Authorization: `Bearer ${TOKEN}`,
};
function fetchDataFromApi(name, url, params) {
	const { isLoading, isError, data, error } = useQuery(
		`${name}`,
		() => {
			return axios.get(`${BASE_URL}${url}`, { headers, params });
		},
		{
			refetchOnWindowFocus: false,
			refetchInterval: 2000,
		}
	);
	return { isLoading, isError, error, data };
}

export default fetchDataFromApi;
