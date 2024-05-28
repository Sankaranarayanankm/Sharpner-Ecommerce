import { Route, Switch } from "react-router-dom";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactUS from "./pages/ContactUS";
import LoginPage from "./pages/LoginPage";


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/store">
          <CartPage />
        </Route>
        <Route path="/contact">
          <ContactUS />
        </Route>
        <Route path="/login" >
          <LoginPage />
        </Route>
        <Route path="*">{/* add redirect here  */}</Route>
      </Switch>
    </>
  );
};

export default App;
