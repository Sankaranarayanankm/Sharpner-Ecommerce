import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  { path: "/", element: <CartPage /> },
  { path: "/about", element: <AboutPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
