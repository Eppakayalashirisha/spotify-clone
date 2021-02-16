export const authEndPoint = "https://accounts.spotify.com/authorize";

//https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#

const redirectUri = "http://localhost:3000/";
const clientId = "7dad587219f343f49662ef45fe589b0d";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const getTokenFromUrl= ()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) =>{
    let parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
}, {});
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
