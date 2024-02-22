import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Details from "../pages/Details/Details";
import CartPage from "../pages/CartPage/CartPage";

export default function Router() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
    { path: "/products", element: <ProductsPage /> },
    {
      path: "/products/:productId",
      element: <Details></Details>,
    },
    {
      path: "/cart",
      element: <CartPage></CartPage>,
    },
  ]);

  return <RouterProvider router={router} />;
}
