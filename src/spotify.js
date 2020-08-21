const authorizeEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://akhils-mbp:3000/";

const clientId = "407bf62db95d4cc78966af43826c1070";

const scopes = [
  "user-read-currently-playing", //Read currently playing music on any device that the users using
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read", //	Read access to a user's top artists and tracks.
  "user-modify-playback-state",
];
// #access_token=
// BQAh9BSnglH6XKyikfBUVO8AaPEVqhxCcX3JpDa2y2I5iaXBcVAm6DhmDi7EpnMMOEKK3Cvt4hAJ5PHL85B8HaEvKauDs4JbgkgKkjULvCetts_U_zWjqMM8-6AoUPvn06Rxa7eptGI_EBWAMXE5wXHgGQ3HR9X4DtDMTIv8YyfVPhzm
// &token_type=Bearer
// &expires_in=3600
// split on & so we get token_type and expires in as array
export const getTokenFromUrl = () => {
  return window.location.hash //goes to the hash of the url stackoverflow's a lifesaver
    .substring(1)
    .split("&")
    .reduce((accumalation, items) => {
      let tokenAdditions = items.split("=");
      accumalation[tokenAdditions[0]] = decodeURIComponent(tokenAdditions[1]);
      return accumalation;
    }, {});
};
export const loginUri = `${authorizeEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&show_dialog=true&response_type=token`; //since scope parameter in uri is separated by spaces which is %20 in ascii
//scopes are displayed to user when agreeing
//token is returned as token.
// https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=token&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09
