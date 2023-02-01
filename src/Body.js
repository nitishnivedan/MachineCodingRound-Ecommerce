import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProductCards from "./ProductCards";
import { productsApi } from "./categoriesApi";
import { useSelector } from "react-redux";

const Body = () => {
  const [product, setProducts] = useState([]);
  const productSelector = useSelector(
    (store) => store.specificProductLists.value
  );
  console.log(productSelector, "productSelector");
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await productsApi();
    console.log(response, "response");
    setProducts(response);
  };
  return (
    <>
      <div className="flex flex-wrap">
        {productSelector &&
          productSelector.length === 0 &&
          product &&
          product.length > 0 &&
          product.map((productitems) => (
            <Link to={"/products?id=" + productitems.id}>
              <ProductCards item={productitems} />
            </Link>
          ))}

        {productSelector &&
          productSelector.length > 0 &&
          productSelector.map((productitems) => (
            <ProductCards item={productitems} />
          ))}
      </div>
    </>
  );
};

export default Body;
