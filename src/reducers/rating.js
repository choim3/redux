const darkReducer = (state = 0, action) => {
  switch (action.type) {
    case "true":
      return state + 1;
    case "false":
      return state - 1;
    default:
      return state;
  }
};
export default darkReducer;
