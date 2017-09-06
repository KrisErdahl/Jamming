import React from 'react';
import './TrackList.css';
import Track from './../Track/Track';

class TrackList extends React.Component {
	render() {
		return (
			<div className="TrackList">
				{console.log('map tracks', map)}
				{this.props.tracks.map(track => {
					return (
						<Track
							onAdd={this.props.onAdd}
							onRemove={this.props.onRemove}
							key={track.id}
							track={track}
							// searchResultsTracks={this.props.tracks}
							tracks={this.props.tracks}
							// tracks={this.props.customTracks}
						/>
					);
				})}
			</div>
		);
	}
}

export default TrackList;
