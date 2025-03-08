import React, { useState } from 'react';
import logo from '../../assets/movix-logo.svg';
import { MenuOpen, Search } from '@mui/icons-material';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
	const [width, setWidth] = useState(1024);
	const [query, setQuery] = useState('');
	const [hidden, setHidden] = useState(true);
	const [hiddenOption, sethide] = useState(true);
	const navigate = useNavigate();

	function searchqueryHandler(e) {
		if (e.keyCode == 13 && query != '') {
			navigate(`/search/${query}`);
			setQuery('');
		}
	}
	window.onresize = () => {
		setWidth(window.innerWidth);
	};

	window.onscroll = () => {};
	return (
		<div className="header_grid">
			<div className="logo">
				<Link to="/">
					<img src={logo}></img>
				</Link>
			</div>
			<div className="options">
				{width > 640 && (
					<>
						<Link className="navLink" to="/explore/movies">
							movies
						</Link>
						<Link className="navLink" to="/explore/tv">
							tv shows
						</Link>
					</>
				)}
				{hidden ? (
					<Search
						className="search_icon"
						onClick={() => {
							setHidden(!hidden);
						}}
					/>
				) : (
					<div className="searchBar">
						<input
							type="text"
							value={query}
							onChange={(e) => {
								setQuery(e.target.value);
							}}
							onKeyDown={searchqueryHandler}
							placeholder="Search for a movie"
						></input>
						<CloseIcon
							className="cross_icon"
							onClick={() => {
								setHidden(!hidden);
							}}
						/>
					</div>
				)}

				{width <= 640 &&
					(hiddenOption ? (
						<MenuOpen
							className="icon"
							onClick={() => {
								sethide(!hiddenOption);
							}}
						/>
					) : (
						<>
							<CloseIcon
								className="icon"
								onClick={() => {
									sethide(!hiddenOption);
								}}
							/>
							<div className="mobileView">
								<ul>
									<Link className="navLink" to="/search">
										<li>movies</li>
									</Link>
									<Link className="navLink" to="/search">
										<li>tvshow</li>
									</Link>
								</ul>
							</div>
						</>
					))}
			</div>
		</div>
	);
}

export default Header;
