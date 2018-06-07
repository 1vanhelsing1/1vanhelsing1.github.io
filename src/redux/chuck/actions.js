const actions = {
  FETCH_CATEGORIES: 'FETCH_CATEGORIES',
  SET_CATEGORIES: 'SET_CATEGORIES',
  FETCH_JOKE: 'FETCH_JOKE',
  SET_JOKE: 'SET_JOKE',
  CLEAR_JOKE: 'CLEAR_JOKE',
  fetchCategories: () => ({
    type: actions.FETCH_CATEGORIES,
  }),
  setCategories: (categories) => ({
    type: actions.SET_CATEGORIES,
    categories,
  }),
  fetchJoke: (category) => ({
    type: actions.FETCH_JOKE,
    category,
  }),
  setJoke: (joke) => ({
    type: actions.SET_JOKE,
    joke,
  }),
  clearJoke: () => ({
    type: actions.CLEAR_JOKE,
  })
};

export default actions;
