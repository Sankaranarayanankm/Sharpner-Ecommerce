import { useState } from "react";
import { createContext } from "react";

export const authContext = createContext({
  token: "",
  email: "",
  isLogin: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const storedToken = JSON.parse(localStorage.getItem("token")) || {
    email: "",
    token: "",
  };
  const [state, setState] = useState({
    token: storedToken.token,
    email: storedToken.email,
  });
  
  const userLoginstatus = !!state.token;

  const loginHandler = (token, email) => {
    setState({
      token,
      email,
    });
    localStorage.setItem("token", JSON.stringify({ token, email }));
  };
  const logoutHandler = () => {
    setState({
      token: "",
      email: "",
    });
    localStorage.removeItem("token");
  };
  const defaultValue = {
    token: state.token,
    email: state.email,
    isLogin: userLoginstatus,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <authContext.Provider value={defaultValue}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
