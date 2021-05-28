const initialState = {
  itemsInCart: [],
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, action.payload],
      };
    case "REMOVE":
      return state;
    default:
      return state;
  }
};
export default cartReducer;
