import React, { useContext } from "react";
import cartContext from "../contexts/CartContext";
import CartItem from "./CartItem";

function Cart({closeCart}) {
  const { cart, removeItem, clearCart, subtotal } = useContext(cartContext);
  // Render the cart using the cart data and functions
  return (
    <>
        <div className="cart">
            <div className="cart_header">
                <button onClick={closeCart} className="cart_collapse">Close Cart</button>
                <h2 className="cart_title">Your Cart</h2>
            </div>
            <div className="cart_body">
            {
                cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((cart_item, key) => (
                        <CartItem 
                            key={key} 
                            cart_item={cart_item} 
                            removeItem={() => removeItem(cart_item)} 
                        />
                    ))
                )
            }
            </div>
            <div className="cart_footer">
                <p>Subtotal: ${subtotal || 0}</p>
                <button>Checkout</button>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
        <div className="cart_overlay" onClick={closeCart}></div>
    </>
  );
}

export default Cart;