const actions = {
  SET_LOADING: 'SET_LOADING',
  SET_JOKE_LOADING: 'SET_JOKE_LOADING',
  setLoading: (isLoading) => ({
    type: actions.SET_LOADING,
    isLoading
  }),
  setJokeLoading: (isLoading) => ({
    type: actions.SET_JOKE_LOADING,
    isLoading
  }),
};

export default actions;
