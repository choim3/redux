const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state;
    case "REMOVE":
      return state;
    default:
      return state;
  }
};
export default cartReducer;
