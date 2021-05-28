import { useDispatch } from "react-redux";
import { add } from "./actions";

// const Details = ({ name, pic, index }) => {
//   const dispatch = useDispatch();
//   return (
//     <div key={index}>
//       <img src={pic} />
//       <p>{name}</p>
//       <button onClick={() => dispatch(add(index, name))}> Add to cart </button>
//     </div>
//   );
// };
const Details = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.pic} />
          <p>{product.firstName}</p>
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};
export default Details;
