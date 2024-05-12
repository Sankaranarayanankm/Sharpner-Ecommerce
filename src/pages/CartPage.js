import React, { useState } from 'react'
import CartProvider from '../Context/CartProvider';
import Header from '../Components/Header/Header';
import ItemList from '../Components/LayOut/ItemList';
import CartOffCanvas from '../Components/Cart/CartOffCanvas';
import Footer from '../Components/Footer/Footer';

const CartPage = () => {
  const [show, setShow] = useState(false);
  const setShowHandler = () => {
    setShow(true);
  };
  const hideShowHandler = () => {
    setShow(false);
  };
  return (
    <CartProvider>
      <Header show={setShowHandler} />
      <ItemList />
      <CartOffCanvas
        show={show}
        showHandler={setShowHandler}
        hide={hideShowHandler}
      />
      <Footer />
    </CartProvider>
  );
}

export default CartPage;