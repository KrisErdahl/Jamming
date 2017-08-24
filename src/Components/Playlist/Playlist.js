import React from 'react';
import './Playlist.css';
import TrackList from './../TrackList/TrackList';

class Playlist extends React.Component {
	constructor(props) {
		super(props);
		// this.state = { newValue: '' };
		this.onNameChange = this.onNameChange.bind(this);
	}

	handleNameChange() {
		let newValue = this.props.playlistName;
		this.onNameChange(newValue);
	}

	render() {
		return (
			<div className="Playlist">
				<input onChange={this.handleNameChange} defaultValue={'New Playlist'} />
				<TrackList onRemove={this.props.onRemove} tracks={this.props.playlistTracks} />
				<a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		);
	}
}

export default Playlist;
