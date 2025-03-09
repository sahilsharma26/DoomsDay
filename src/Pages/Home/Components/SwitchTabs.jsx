import React, { useEffect, useState } from 'react';
import '../style.scss';

function SwitchTabs({ getquery, options }) {
	const [query, setQuery] = useState(options[0]);

	useEffect(() => {
		getquery(query);
	}, [query]);
	return (
		<>
			<div className="tabs">
				{options.map((value, index) => {
					return (
						<p
							key={index}
							style={{ color: query === `${value}` ? `white` : 'black' }}
							onClick={() => {
								setQuery(`${value}`);
							}}
						>
							{value}
						</p>
					);
				})}
				<p
					className="slider"
					style={{ left: query === options[0] ? `1%` : `49%` }}
				></p>
			</div>
		</>
	);
}

export default SwitchTabs;
