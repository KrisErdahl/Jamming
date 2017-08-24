import React from 'react';
import './Track.css';

class Track extends React.Component {
	renderAction(Track) {
		if (Track === true) {
			return <a>-</a>;
			// or '-';
		} else {
			return <a>+</a>;
			// or '+';
		}
	}

	addTrack(track) {
		this.props.addOn(this.props.track);
	}

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
				<a className="Track-action">
					{this.renderAction(Track)}
				</a>
			</div>
		);
	}
}
export default Track;
