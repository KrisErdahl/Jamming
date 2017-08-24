import React from 'react';
import './Track.css';

const TrackAction = {
	renderAction() {
		if (TrackAction === true) {
			return <a>-</a>;
			// or '-';
		} else {
			return <a>+</a>;
			// or '+';
		}
	}
};
//Could also be written in the Track component with

class Track extends React.Component {
	render() {
		return (
			<div className="Track">
				<div className="Track-information">
					<h3>
						{this.props.track.name}
					</h3>
					<p>
						{this.props.track.artist} | {this.props.track.album}
					</p>
				</div>
				<a className="TrackAction" />
				{/* <!-- + or - will go in TrackAction (Track-action) --> */}
			</div>
		);
	}
}
export default Track;
