import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from './../SearchBar/SearchBar';
import SearchResults from './../SearchResults/SearchResults';
import Playlist from './../Playlist/Playlist';
import Spotify from './../../util/Spotify/Spotify';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			playlistName: 'Songs All Day',
			playlistTracks: new Set([
				{
					name: 'Song Time',
					artist: 'Me!',
					album: 'This Is It'
				},
				{
					name: 'Rhyme It',
					artist: 'Me, again',
					album: 'Here It Is'
				}
			])
		};

		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
		this.savePlaylist = this.savePlaylist.bind(this);
		this.search = this.search.bind(this);
	}

	addTrack(track) {
		let tracks = this.state.playlistTracks;
		tracks.add(track);
		this.setState({ playlistTracks: tracks });
	}

	removeTrack(track) {
		let tracks = this.state.playlistTracks;
		if (track.id) {
			tracks.delete(track);
		}
		this.setState({ playlistTracks: tracks });
	}

	updatePlaylistName(name) {
		this.setState({ playlistName: name });
	}

	savePlaylist() {
		let trackURIs = [this.state.playlistTracks];
	}

	search(term) {
		console.log(term);
		Spotify.search(term);
	}

	render() {
		return (
			<div>
				<h1>
					Ja<span className="highlight">mmm</span>ing
				</h1>
				<div className="App">
					<SearchBar onSearch={this.search} />
					<div className="App-playlist">
						<SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} tracks={this.state.tracks} />
						<Playlist
							onRemove={this.removeTrack}
							onNameChange={this.updatePlaylistName}
							onSave={this.savePlaylist}
							playlistName={this.state.playlistName}
							playlistTracks={this.state.playlistTracks}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
