import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h3>{cart.length}</h3>
    </div>
  );
};

export default Cart;
