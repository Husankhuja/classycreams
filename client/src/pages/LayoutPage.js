import { useState } from "react";

import Header from "../components/Header";
import Cart from "../components/Cart";

function LayoutPage({ children }) {
  const [displayCart, setDisplayCart] = useState(false);

  const openCart = () => {
    setDisplayCart(true);
  };

  const closeCart = () => {
    setDisplayCart(false);
  };

  return (
    <div>
        <Header openCart={openCart} />
        {
            displayCart && (
              <Cart closeCart={closeCart} />
            )
        }
        {children}
    </div>
  );
}

export default LayoutPage;