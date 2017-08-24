import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from './../SearchBar/SearchBar';
import SearchResults from './../SearchResults/SearchResults';
import Playlist from './../Playlist/Playlist';
// import TrackList from './../TrackList/TrackList';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: {
				name: '',
				artist: '',
				album: ''
			}
		};

		this.playlistName = 'Songs All Day';
		this.playlistTracks = [
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
		];
	}

	addTrack(track) {
		if (playlist.id !== this.state.playlistTracks[track]) {
			playlistTracks.push(track);
		}
	}

	render() {
		return (
			<div>
				<h1>
					Ja<span className="highlight">mmm</span>ing
				</h1>
				<div className="App">
					<SearchBar />
					<div className="App-playlist">
						<SearchResults searchResults={this.state.searchResults} tracks={this.state.tracks} />
						<Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
