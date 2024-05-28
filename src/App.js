import { Route, Switch, Redirect } from "react-router-dom";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactUS from "./pages/ContactUS";
import LoginPage from "./pages/LoginPage";
import { useContext } from "react";
import { authContext } from "./Context/AuthContextProvider";

const App = () => {
  const authCtx = useContext(authContext);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        {authCtx.isLogin && (
          <Route path="/store">
            <CartPage />
          </Route>
        )}
        <Route path="/contact">
          <ContactUS />
        </Route>
        <Route path="/login">
          {!authCtx.isLogin && <LoginPage />}
          {authCtx.isLogin && <HomePage />}
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
