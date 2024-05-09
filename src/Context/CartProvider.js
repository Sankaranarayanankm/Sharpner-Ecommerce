import { useReducer } from "react";
import cartContext from "./cart-context";

const initalReducer = {
  items: [],
  cartItems: [],
};
const reducer = (state, action) => {
  if (action.type == "ADD") {
    console.log(action.item);
    let existingCartItemIndex = state.items.findIndex(
      (item) => item.id == action.item.id
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
};
const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initalReducer);
  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
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
