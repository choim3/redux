import Details from "./details";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProducts(data.students);
  };

  return (
    <div>
      <h1>Productify</h1>

      {products.map((product) => (
        <Details name={product.firstName} pic={product.pic} />
      ))}
      {/* <Details name={products[0].firstName} pic={products[7].pic} /> */}
    </div>
  );
}
