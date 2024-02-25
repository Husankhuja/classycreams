function CartItem({cart_item, removeItem}) {
    console.log(cart_item);
    return (
        <div className="cart_item">
            <h3>{cart_item.product.name}</h3>
            <p>${cart_item.product.basePrice}</p>
            {
                cart_item.iceCreams?.length > 0 && (
                    cart_item.iceCreams.map((icecream, key) => (
                        <div>
                            <p key={key}>{icecream.quantity} x serves of {icecream.name}</p>
                            <p>${icecream.basePrice}</p>
                        </div>
                    ))
                )
            }
            {
                cart_item.toppings?.length > 0 && (
                    cart_item.toppings.map((topping, key) => (
                        <div key={key}>
                            <p>{topping.quantity} x {topping.name}</p>
                            <p>${topping.basePrice}</p>
                        </div>
                    ))
                )
            }
            <p>${cart_item.price}</p>
            <button onClick={removeItem}>Remove</button>
        </div>
    );
}

export default CartItem;