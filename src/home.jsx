import Details from "./details";
import Cart from "./cart";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    const response = await fetch();
    const data = await response.json();
    setProducts(data.students);
  };

  return (
    <div>
      <h1>Productify</h1>
      <Cart />
      <Details products={products} />

      {/* {products.map((product) => (
        <Details
          index={product.id}
          name={product.firstName}
          pic={product.pic}
        />
      ))} */}
      {/* <Details name={products[0].firstName} pic={products[7].pic} /> */}
    </div>
  );
}
