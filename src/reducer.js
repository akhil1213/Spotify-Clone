export const initialState = {
  user: null,
  token: "",
  userPlayList: [],
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_TOKEN":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        userPlayList: action.payload,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
