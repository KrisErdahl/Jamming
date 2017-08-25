const clientID = '627216329abc4fa89e00bf36b262c17e';
let accessToken = '';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		} else {
			let url = window.location.href;
			fetch(
				`https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token&state=234`
			).then(resolve => resolve(window.location.href));
			if (url.indexOf('#access_token') !== -1) {
				url.match('/access_token=([^&]*)/');
				accessToken = /access_token=([^&]*)/;
				console.log(accessToken);
				url.match('/expires_in=([^&]*)/');
				let expiresIn = /expires_in=([^&]*)/;
				console.log(expiresIn);
				window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
				window.history.pushState('Access Token', null, '/');
				window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
				return window.location;
			}
		}
	},
	search(term) {
		Spotify.getAccessToken();
		return new Promise(resolve => resolve(accessToken))
			.then(() => {
				return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				});
			})
			.then(response => response.json())
			.then(jsonResponse => {
				if (jsonResponse.tracks) {
					console.log('Got a response');
					return jsonResponse.tracks.map(track => ({
						id: track.id,
						name: track.name,
						artist: track.artists[0].name,
						album: track.album.name,
						uri: track.uri
					}));
				} else {
					console.log('No responses found');
					return [];
				}
			});
	}
};

export default Spotify;
