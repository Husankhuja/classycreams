import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OrderInfoPage = () => {
    const [order, setOrder] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const [orderPrice, setOrderPrice] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { orderId } = useParams();

    useEffect(() => {

        fetch(`https://classy-creams.herokuapp.com/api/orders/${orderId}`,
            {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("token")}`,
                    },
            })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setOrder(data.order);
                setOrderItems(data.orderItemResponses);
                setOrderPrice(data.orderPrice);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, [orderId]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (    
        <div>
        <h2>Order Data</h2>
        <p>Order ID: {order.orderId}</p>
        <p>User ID: {order.userId}</p>
        <p>Order Status: {order.orderStatus}</p>
        <p>Order Date: {order.orderDate}</p>
        <p>Payment Status: {order.paymentStatus}</p>
        <p>Delivery Address: {order.deliveryAddress || "N/A"}</p>
        <p>Is Delivery: {order.isDelivery ? "Yes" : "No"}</p>
        <h3>Order Items:</h3>
        {orderItems.map((item) => (
          <div key={item.orderItem.orderItemId}>
            <p>Product ID: {item.orderItem.productId}</p>
            <p>Product Name: {item.product.name}</p>
            <p>Product Description: {item.product.description}</p>
            <p>Product Type: {item.product.type}</p>
            <p>Product Base Price: {item.product.basePrice}</p>
            <h4>Ice Cream:</h4>
            {item.orderItemIceCreamResponses.map((iceCream) => (
              <div key={iceCream.orderItemIceCream.iceCreamId}>
                <p>Ice Cream Name: {iceCream.iceCream.name}</p>
                <p>Ice Cream Description: {iceCream.iceCream.description}</p>
                <p>Ice Cream Type: {iceCream.iceCream.type}</p>
                <p>Ice Cream Base Price: {iceCream.iceCream.basePrice}</p>
              </div>
            ))}
            <h4>Toppings:</h4>
            {item.orderItemToppingResponses.map((topping) => (
              <div key={topping.orderItemTopping.toppingId}>
                <p>Topping Name: {topping.topping.name}</p>
                <p>Topping Description: {topping.topping.description}</p>
                <p>Topping Base Price: {topping.topping.basePrice}</p>
              </div>
            ))}
          </div>
        ))}
        <h3>Order Price:</h3>
        <p>Subtotal: {orderPrice.subtotal}</p>
        <p>Tip: {orderPrice.tip}</p>
        <p>Delivery Fee: {orderPrice.deliveryFee}</p>
        <p>Tax: {orderPrice.tax}</p>
        <p>Total: {orderPrice.total}</p>
      </div>
    );

}

export default OrderInfoPage;