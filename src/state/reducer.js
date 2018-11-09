const initialState = {
  chores: [],
  loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHORES':
      return {
        ...state,
        chores: action.data,
      };
    case 'ADD_COMPLETE':
      console.log(action);
      return {
        ...state,
        chores: [...state.chores, action.data],
      };
    default:
      return state;
  }
};

export default Reducer;
