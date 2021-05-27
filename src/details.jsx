const Details = ({ name, pic }) => {
  return (
    <div>
      <img src={pic} />
      <p>{name}</p>
      <button> Add to cart </button>
    </div>
  );
};
export default Details;
