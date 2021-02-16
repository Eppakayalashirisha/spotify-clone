export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQDWYkRKLa0iBAyX0me14wswxDjOyY-kMXdF1ynCGhl4reaSJT2Tr96hHjmt5q-VNhSCAfdP1Qh6vy0NHa_euG5v4hRJLGOwgpuxsDE8w2eCjKDvekUQFRitbmfLy0r_SFObCWRzqMtBxy6aB7TnYE7nskwNjykhEAAVmoaCF7bsSUBD"
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
}
export default reducer;