
import Banner from './Components/Banner';
import Trending from './Components/Trending';
import Popular from './Components/Popular';

function Home() {
	return (
		<>
			<Banner />

			<div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
				<Trending
					title="trending"
					endPoint="trending"
					options={['day', 'week']}
				/>
				<Popular
					endPoint="popular"
					title="What's Popular"
					options={['movie', 'tv']}
				/>
				<Popular
					endPoint="top_rated"
					title="top rated"
					options={['movie', 'tv']}
				/>
			</div>
		</>
	);
}

export default Home;
