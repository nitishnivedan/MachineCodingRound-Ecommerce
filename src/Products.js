import produce from "immer";
import { useEffect, useState } from "react";

import ProductCards from "./ProductCards";
import { productsByID } from "./categoriesApi";

const Product = () => {
  const [idS, setID] = useState("");
  const [oneproduct, setOneProduct] = useState([]);
  useEffect(() => {
    const id = window.location.href.split("=")[1];
    setID(id);
    getProductsByID(id);
  }, []);

  const getProductsByID = async (specificID) => {
    const response = await productsByID(specificID);
    setOneProduct(response);
    console.log(response, "idspecificproducts");
  };

  return (
    <>
      <div>
        Product
        {oneproduct && oneproduct.length !== 0 && (
          <ProductCards item={oneproduct} />
        )}
      </div>
    </>
  );
};

export default Product;
