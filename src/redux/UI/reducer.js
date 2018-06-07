import actions from "./actions";

const initialState = {
  isLoading: true,
  isJokeLoading: false,
};

function UIReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case action.SET_JOKE_LOADING:
      return {
        ...state,
        isJokeLoading: action.isLoading
      };    
    default:
      return state;
  }
}

export default UIReducer;
