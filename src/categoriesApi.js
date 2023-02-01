export const categoryApi = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const json = response.json();
  return json;
};

export const productsApi = async () => {
  const response = await fetch("https://fakestoreapi.com/products/");
  const json = response.json();
  return json;
};

export const specificCategories = async (selectedCategory) => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/" + selectedCategory
  );
  const json = response.json();
  return json;
};

export const productsByID = async (id) => {
  const response = await fetch("https://fakestoreapi.com/products/" + id);
  const json = response.json();
  return json;
};
