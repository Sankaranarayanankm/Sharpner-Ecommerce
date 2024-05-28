import { useState } from "react";
import { createContext } from "react";

export const authContext = createContext({
  token: "",
  isLogin: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const storedToken=localStorage.getItem('token');
  const [token, setToken] = useState(storedToken);
  const userLoginstatus=!!token;
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token',token);
  };
  const logoutHandler = () => {
    setToken("");
    localStorage.removeItem('token');
  };
  const defaultValue = {
    token: token,
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