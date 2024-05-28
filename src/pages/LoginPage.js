import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Form, Button, Alert } from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import { useContext } from "react";
import { authContext } from "../Context/AuthContextProvider";



const LoginPage = () => {
  const history=useHistory();
  const authCtx=useContext(authContext);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const switchLoginHandler = () => {
    setIsLogin((login) => !login);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (isLogin) {
      const loginHandler = async () => {
        setLoading(true);
        setError('');
        try {
          const response = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEBJMrbbMUfwE61UR-q8YBvB9tTY5Cp44",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: state.email,
                password: state.password,
                returnSecureToken: false,
              }),
            }
          );
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              errorData.error.message || "Failed to Login to your account"
            );
          }
          const resData = await response.json();
          setData(resData);
          authCtx.login(resData.idToken);
          
          history.replace('/store');
        } catch (error) {
          setError(error || "Failed to login");
        } finally {
          setLoading(false);
        }
      };
      loginHandler();
     
      
    } else {
      const signupHandler = async () => {
        setLoading(true);
        setError('');
        try {
          const response = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEBJMrbbMUfwE61UR-q8YBvB9tTY5Cp44",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: state.email,
                password: state.password,
                returnSecureToken: false,
              }),
            }
          );
          if (!response.ok) {
            const errorData = await response.json();
            setError(errorData.error.message || "Failed to sign-up");
            throw new Error(errorData.error.message || "Failed to sign-up");
          }
          const resData = await response.json();
          setData(resData);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      signupHandler();
    }
  };

  return (
    <>
      <Header />
      <h1>{isLogin ? "Login" : "Sign up"}</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={state.email}
            onChange={changeHandler}
            name="email"
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-5">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={state.password}
            onChange={changeHandler}
          />
        </Form.Group>
        <div className="text-center mb-5">
          <Button variant="primary" type="submit">
           {!loading?"Login":"Sending Reqeust"}
          </Button>
          <Button
            className="m-1"
            variant="info"
            type="button"
            onClick={switchLoginHandler}
          >
            {isLogin ? "Create Account" : "Go to Login"}
          </Button>
        </div>
      </Form>
      <Footer />
    </>
  );
};

export default LoginPage;
