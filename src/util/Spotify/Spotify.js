const clientID = '627216329abc4fa89e00bf36b262c17e';
let accessToken;
const redirectURI = 'http://localhost:3000/';

const Spotify = {
	getAccessToken() {
		if (accessToken) {
			console.log('I have my accessToken');
			return accessToken;
		}
		if (window.location.href.indexOf('#access_token') > -1) {
			console.log('I have a token.  Let me save it.');
			let atResults = window.location.href.match(/access_token=([^&]*)/);
			let accessToken = atResults[1];
			console.log(accessToken);
			let eiResults = window.location.href.search(/expires_in=([^/]*)/);
			let expiresIn = eiResults[1];
			console.log(expiresIn);
			window.setTimeout(() => (accessToken = ''), expiresIn);
			window.history.pushState('Access Token', null, '/');
			// window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
			// return window.location;
			return accessToken;
		} else {
			window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token`;
		}
	},

	search(term) {
		let accessToken = Spotify.getAccessToken();
		console.log(accessToken);
		return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}).then(jsonResponse => {
			return jsonResponse.tracks.map(track => ({
				id: jsonResponse.id,
				name: jsonResponse.name,
				artist: jsonResponse.artists[0].name,
				album: jsonResponse.album.name,
				uri: jsonResponse.uri
			}));
		});
	},

	// .then(jsonResponse => {
	// 	if (jsonResponse.track) {
	// 		console.log('Got a tracks response');
	// 		return jsonResponse.track.map(track => ({
	// 			id: track.id,
	// 			name: track.name,
	// 			artist: track.artists[0].name,
	// 			album: track.album.name,
	// 			uri: track.uri
	// 		}));
	// } else {
	// 	console.log('No responses found');
	// 	return [];
	// }

	savePlaylist(playlistName, trackUris) {
		if (!playlistName || !trackUris.length) {
			return;
		}
		let userToken = Spotify.getAccessToken();
		console.log(userToken);
		let userID;
		return fetch(`https://api.spotify.com/v1/me`, {
			headers: {
				Authorization: `Bearer ${userToken}`
			}
		})
			.then(response => response.json())
			.then(jsonResponse => {
				userID = jsonResponse.id;
				return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
					headers: {
						Authorization: `Bearer ${userToken}`
					},
					method: 'POST',
					body: JSON.stringify({ name: playlistName })
				})
					.then(response => response.json())
					.then(jsonResponse => {
						const playlistId = jsonResponse.id;
						return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistId}/tracks`, {
							headers: {
								Authorization: `Bearer ${userToken}`
							},
							method: 'POST',
							body: JSON.stringify({ uris: trackUris })
						});
					});
			});
	}
};

export default Spotify;

// .then(response => {
// 	if (response.ok) {
// 		return response.json();
// 	}
// 	throw new Error('Request to saveplaylist1 failed!');
// 	// networkError => console.log(networkError.message);
// })
// .then(response => response.json())
// .then(jsonResponse => {
// 	if (jsonResponse.user) {
// 		console.log('Got a user response');
// 		console.log(jsonResponse.user.map(user => ({ userID: user.id })));
// 		return jsonResponse.user.map(user => ({ userID: user.id }));
// 	}
// })
// .then(fetch(`https://api.spotify.com/v1/users/${userID}/playlists`), {
// 	method: 'POST',
// 	body: JSON.stringify({
// 		id: `name: ${playlistName}`
// 	}),
// 	headers: { Authorization: `Bearer ${userToken}`, '`Content-Type`': 'application/json' }
// })
// .then(response => {
// 	if (response.ok) {
// 		return response.json();
// 	}
// 	throw new Error('Request saveplaylist2 failed!');
// })
// .then(response => response.json())
// .then(jsonResponse => {
// 	if (jsonResponse.playlist) {
// 		console.log('Got a playlist response');
// 		return jsonResponse.playlist.map(playlist => ({ playlistID: playlist.id }));
// 	}
// })
// .then();
//
// 	}
// };
