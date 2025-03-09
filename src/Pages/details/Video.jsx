import React from 'react';
import { PlayIcon } from './PlayBtn';

function Video({ title, keyId }) {
	return (
		<>
			<div className="video_grid">
				<div className="video">
					<img src={`https://img.youtube.com/vi/${keyId}/mqdefault.jpg`}></img>
					<div className="playbtn">
						<PlayIcon />
					</div>
				</div>
				<p className="title">{title}</p>
			</div>
		</>
	);
}

export default Video;
