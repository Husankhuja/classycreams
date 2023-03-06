import React, { useContext } from "react";
import { cartContext } from "../contexts/CartContext";

function Cart({closeCart}) {
  const { cart, removeItem, clearCart } = useContext(cartContext);

  // Render the cart using the cart data and functions
  return (
    <div>
        <button onClick={closeCart}>Close Cart</button>
        <h2>Your Cart</h2>
        {
            cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {
                    cart.map((item) => (
                        <li key={item.id}>
                        <p>{item.name} - ${item.price}</p>
                        <button onClick={() => removeItem(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )
        }
        <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default Cart;