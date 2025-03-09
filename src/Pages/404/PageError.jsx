import './style.scss';
import { useNavigate } from 'react-router-dom';

function PageError() {
	const navigate = useNavigate();
	return (
		<div className="error">
			<button onClick={() => navigate('/')}>Go to home</button>
		</div>
	);
}

export default PageError;
