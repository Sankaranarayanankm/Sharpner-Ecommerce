import { useContext, useEffect, useReducer } from "react";
import cartContext from "./cart-context";
import { authContext } from "./AuthContextProvider";
const initalReducer = {
  items: [],
};
const reducer = (state, action) => {
  if (action.type === "ADD") {
    let existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat({ ...action.item, quantity: 1 });
    }
    return {
      ...state,
      items: updatedItems,
    };
  }
  else if(action.type=='SET_DATA'){
    return {
      ...state,
      items:action.item
    }
  }
};
const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initalReducer);
  const authCtx = useContext(authContext);
  const updatedEmail = authCtx.email.replace(/[@.]/g, "");
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://crudcrud.com/api/1ce442d3b2384c05a1d21b18be604601/cart${updatedEmail}`
        );
        if (!response.ok) {
          const errorData = response.json();
          throw new Error(errorData.error.message);
        }
        const resData = await response.json();
        dispatch({ type: "SET_DATA", item: resData });
      } catch (error) {
        console.log(error);
      }
    };
    if (authCtx.isLogin) {
      fetchData();
    }
  }, [authCtx.email, authCtx.isLogin]);
console.log(state.items)
  const addItemToCartHandler = (item) => {
    let newItem = state.items.find((itm) => itm.id == item.id);
    if (newItem) {
      newItem = {
        ...item,
        quantity: newItem.quantity + 1,
      };
    } else {
      newItem = {
        ...item,
        quantity: 1,
      };
    }
    console.log(newItem);
    const postData = async () => {
      try {
        const response = await fetch(
          `https://crudcrud.com/api/1ce442d3b2384c05a1d21b18be604601/cart${updatedEmail}`,
          {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          const errorData = response.json();
          throw new Error(errorData.error.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    dispatch({ type: "ADD", item: item });
    postData();
  };
  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const defaultContext = {
    items: state.items,
    cartItems: state.cartItems,
    addToCart: addItemToCartHandler,
    removeFromCart: removeItemFromCartHandler,
  };

  return (
    <cartContext.Provider value={defaultContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
