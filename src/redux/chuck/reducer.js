import actions from "./actions";

const initialState = {
  categories: [],
  numCategories: 0,
  joke: null,
};

function chuckReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_CATEGORIES:
      // let categories = []
      // action.categories.forEach((category, i) => {
      //   const c = {
      //     category,
      //     opacity: 0,
      //     transform: 'none'
      //   }
      //   categories.push(c)
      // })
      return {
        ...state,
        categories: action.categories,
        numCategories: action.categories.length,
      };
    case actions.SET_JOKE:
      return {
        ...state,
        joke: action.joke,
      }
    case actions.CLEAR_JOKE:
      return {
        ...state,
        joke: null,
      }
    default:
      return state;
  }
}

export default chuckReducer;
