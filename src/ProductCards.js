const ProductCards = ({ item }) => {
  const { image, category, price } = item;
  return (
    <>
      <div className="p-2 ml-5 shadow-lg w-[200px] m-10">
        <img alt="product image" src={image} className="h-[150px]" />
      </div>
    </>
  );
};

export default ProductCards;
