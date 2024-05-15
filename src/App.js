import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactUS from "./pages/ContactUS";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/store", element: <CartPage /> },
  { path: "/contact", element: <ContactUS /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
