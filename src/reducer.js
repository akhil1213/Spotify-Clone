export const initialState = {
  user: null,
  token: "",
  userPlayList: [],
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
  }
};

export default reducer;
