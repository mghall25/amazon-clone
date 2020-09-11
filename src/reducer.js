export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log("per reducer.js, action = ", action);
  console.log("per reducer.js, state= ", state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
