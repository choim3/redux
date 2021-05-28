export const add = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};
