import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { placeOrderRequest } from "../services/order";
import cartContext from "../contexts/CartContext";
import UserLayout from "./UserLayout";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(cartContext);
  const [address, setAddress] = useState('');
  const [isDelivery, setIsDelivery] = useState(true);
  const [tip, setTip] = useState(0);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderItems = cart.map((cartItem) => {
      const { product, iceCreams, toppings } = cartItem;
      const iceCreamIds = iceCreams.map((iceCream) => iceCream.iceCreamId);
      const toppingIds = toppings.map((topping) => topping.toppingId);
      return {
        productId: product.productId,
        iceCreamIds,
        toppingIds
      };
    });
    const checkoutData = {
      address,
      orderItems,
    };
    console.log(checkoutData);
    placeOrderRequest(checkoutData)
        .then((res) => {
            if (res.ok) {
                clearCart();
                alert("Order placed");
            }
            else {
                alert("Something went wrong");
            }
        })
  };

  return (
    <UserLayout>
    <div>
      <h1>Checkout</h1>
      <p>pretend the items are displayed here</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label htmlFor="isDelivery">Delivery:</label>
          <input type="checkbox" id="isDelivery" name="isDelivery" checked={isDelivery} onChange={(e) => setIsDelivery(e.target.checked)} />
        </div>
        <div>
          <label htmlFor="tip">Tip:</label>
          <input type="number" id="tip" name="tip" value={tip} onChange={(e) => setTip(Number(e.target.value))} />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
    </UserLayout>   
  );
};

export default CheckoutPage;
