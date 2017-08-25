const clientID = '627216329abc4fa89e00bf36b262c17e';
const secret = 'e9db99b6bbb4472e9989525949174135';
const accessToken = '';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		} if(document.URL.indexOf("#access_token") != -1) {
      let url = window.location.href;
      url.match()
} else {
    //nope
}

    }
	}
};

export default Spotify;
