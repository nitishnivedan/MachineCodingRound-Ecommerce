import { Provider } from "react-redux";

import Header from "./Header";
import Body from "./Body";
import store from "./store";
import Product from "./Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <div>Path not found</div>,
  },
  {
    path: "/products",
    element: <Product />,
    errorElement: <div>Path not found</div>,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
