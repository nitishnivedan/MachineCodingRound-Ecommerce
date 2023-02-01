import Categories from "./Categories";

const Header = () => {
  return (
    <>
      <div className="grid grid-flow-cols grid-cols-12 shadow-lg p-2">
        <div className="col-span-2">
          <img
            alt="logo"
            src="https://cdn.worldvectorlogo.com/logos/flipkart.svg"
          />
        </div>
        <div className="col-span-6 ml-10">
          <Categories />
        </div>
      </div>
    </>
  );
};

export default Header;
