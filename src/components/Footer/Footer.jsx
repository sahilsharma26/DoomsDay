import React from 'react';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.scss';
import { Link } from 'react-router-dom';
function Footer() {
	return (
		<div className="footer">
			<ul className="options_list">
				<Link className="option">
					<li>Terms Of use</li>
				</Link>
				<Link className="option">
					<li>Privacy Policy</li>
				</Link>
				<Link className="option">
					<li>About</li>
				</Link>
				<Link className="option">
					<li>Blog</li>
				</Link>
				<Link className="option">
					<li>FAQ</li>
				</Link>
			</ul>
			<p className="description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur.
			</p>
			<ul className="socialHandles">
				<li>
					<FacebookSharpIcon className="icon" />
				</li>
				<li>
					<InstagramIcon className="icon" />
				</li>
				<li>
					<TwitterIcon className="icon" />
				</li>
				<li>
					<LinkedInIcon className="icon" />
				</li>
			</ul>
		</div>
	);
}

export default Footer;
