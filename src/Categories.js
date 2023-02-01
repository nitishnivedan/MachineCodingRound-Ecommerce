import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addItem } from "./specificProductsSlice";
import { categoryApi, specificCategories } from "./categoriesApi";

const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategory, setSelectedCategoryList] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    callCategories();
  }, []);
  const callCategories = async () => {
    const response = await categoryApi();
    setCategoriesList(response);
  };

  const onOptionChangeHandler = async (event) => {
    setSelectedCategoryList(event.target.value);
    const specificCategoryList = await specificCategories(event.target.value);
    dispatch(addItem(specificCategoryList));
  };
  return (
    <>
      <div className="mt-6 ml-4">
        {" "}
        <select onChange={onOptionChangeHandler} value={selectedCategory}>
          <option>Please choose one option</option>
          {categoriesList.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default Categories;
