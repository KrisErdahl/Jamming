import React from 'react';
import './Track.css';

class Track extends React.Component {
	constructor(props) {
		super(props);
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
	}

	renderAction(Track) {
		if (Track === true) {
			return <a onClick={this.removeTrack}>-</a>;
			// or '-';
		} else {
			return <a onClick={this.addTrack}>+</a>;
			// or '+';
		}
	}

	addTrack(track) {
		this.props.addOn(this.props.track);
	}

	removeTrack(track) {
		this.props.removeTrack(this.props.track);
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
