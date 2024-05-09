import React from "react";

const cartContext=React.createContext({
  items:[],
  cartItems:[],
  addToCart:(item)=>{},
  removeFromCart:(id)=>{}
});
export default cartContext;