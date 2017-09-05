import React from 'react';
import './Track.css';

class Track extends React.Component {
	constructor(props) {
		super(props);
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		// console.log('this.props2', this.props);
	}

	renderAction = () => {
		console.log('this.props', this.props);
		if (this.props.onRemove) {
			return (
				<a className="Track-action" onClick={this.removeTrack}>
					-
				</a>
			);
			// or '-';
		} else {
			return (
				<a className="Track-action" onClick={this.addTrack}>
					+
				</a>
			);
			// or '+';
		}
	};

	addTrack(track) {
		this.props.onAdd(this.props.track);
	}

	removeTrack(track) {
		this.props.onRemove(this.props.track);
	}

	render() {
		console.log(this.props);
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
				<div className="Track-action">
					{this.renderAction(this.props.tracks)}
				</div>
			</div>
		);
	}
}
export default Track;
