import { useContext, useEffect, useState } from "react";
import cartContext from "../contexts/CartContext";
import { iceCreamRequest, toppingRequest } from "../services/product";

function OrderModal ({ product, closeModal }) {
    const [iceCreamType, setIceCreamType] = useState("SOFTSERVE");
    const [maxIceCreams, setMaxIceCreams] = useState(0);
    const [iceCreamTotal, setIceCreamTotal] = useState(0);
    const [toppings, setToppings] = useState([]); 
    const [iceCreams, setIceCreams] = useState([]);
    
    const { addItem } = useContext(cartContext);

    useEffect(() => {
        if (product.type === "CONE" || product.type === "CUP") {
            toppingRequest()
            .then(res => res.json())
            .then(data => setToppings(data));

            iceCreamRequest()
            .then(res => res.json())
            .then(data => setIceCreams(data));
        }
    }, []);

    useEffect(() => {
        setMaxIceCreams( iceCreamType === "SOFTSERVE" ? product.iceCreamSupport.maxSoft
                            : product.iceCreamSupport.maxScoops);
    }, [iceCreamType]);


    const handleSelectType = (e) => {
        setIceCreamType(e.target.value);
    };

    const handleIncrementIceCream = (iceCreamId) => {
        if (iceCreamTotal < maxIceCreams) {
            setIceCreams(prev => prev.map(iceCream => (
                iceCream.iceCreamId === iceCreamId ? 
                    {...iceCream, quantity: (iceCream.quantity || 0) + 1} :
                    iceCream
            )));
            setIceCreamTotal(iceCreamTotal + 1);
        }
    };

    const handleIncrementTopping = (toppingId) => {
        setToppings(prev => prev.map(topping => (
            topping.toppingId === toppingId ?
                {...topping, quantity: (topping.quantity || 0) + 1} :
                topping
        )));
    };

    const handleDecrementIceCream = (id) => {
        setIceCreams(prev => prev.map(iceCream => {
            if (iceCream.iceCreamId === id && iceCream.quantity > 0) {
                return {...iceCream, quantity: iceCream.quantity - 1};
            }
            return iceCream;
        }));
        setIceCreamTotal(prev => prev - 1);            
    };

    const handleDecrementTopping = (id) => {
        setToppings(prev => prev.map(topping => {
            if (topping.toppingId === id && topping.quantity > 0) {
                return {...topping, quantity: topping.quantity - 1};
            }
            return topping;
        }));
    };

    const calculatePrice = () => {
        let price = product.basePrice;
        price += iceCreams.reduce((acc, iceCream) => {
            return acc + (iceCream.quantity || 0) * iceCream.basePrice;
        }, 0);
        price += toppings.reduce((acc, topping) => {
            return acc + (topping.quantity || 0) * topping.basePrice;
        }, 0);
        return price;
    };

    const handleAddToCart = () => {
        let price = calculatePrice();
        const cartItem = {
            product: product,
            iceCreams: iceCreams.filter(iceCream => iceCream.quantity > 0),
            toppings: toppings.filter(topping => topping.quantity > 0),
            price
        };
        addItem(cartItem);
        closeModal();
    };

    return (
        <>
            <div className="modal">
            <div className="modal_content">
                <div className="modal_header">
                    <h3>{product.name}</h3>
                    <span className="close" onClick={closeModal}>&times;</span>
                </div>
                <div className="modal_body">
                    <img
                        className="modal_image"
                        src={product.imageUrl}
                        alt={product.name} 
                    />
                    
                    <p>{product.description}</p>
                    <p>${product.basePrice}</p>

                    {
                        iceCreams && (
                            <div>
                                <h2>Ice Creams</h2>
                                <p>Choose your ice cream type</p>
                                <select value={iceCreamType} onChange={handleSelectType}>
                                    <option value="SOFTSERVE">Soft-Serve</option>
                                    <option value="HARDSCOOPED">Hard-Scooped</option>
                                </select>
                                {
                                    iceCreams
                                    .filter(iceCream => iceCream.type == iceCreamType)
                                    .map((iceCream, key) => (
                                        <div className="modal_addon" key={key}>
                                            <p>{iceCream.name} - ${iceCream.basePrice}</p>
                               
                                            <button 
                                                onClick={() => handleDecrementIceCream(iceCream.iceCreamId)} 
                                                disabled={(iceCream.quantity || 0) === 0}
                                            >-</button>
                                                <p>{iceCream.quantity || 0}</p>
                                            <button 
                                                onClick={() => handleIncrementIceCream(iceCream.iceCreamId)}
                                                disabled={iceCreamTotal >= maxIceCreams}
                                            >+</button>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                    {
                        toppings && (
                            <div>
                                <h2>Toppings</h2>
                                {
                                    toppings.map((topping, key) => (
                                        <div key={key} className="modal_addon">
                                            <p>{topping.name} - ${topping.basePrice}</p>
                                            <button
                                                onClick={() => handleDecrementTopping(topping.toppingId)}
                                                disabled={(topping.quantity || 0) === 0}
                                            >-</button>
                                                <p>{topping.quantity || 0}</p>
                                            <button
                                                onClick={() => handleIncrementTopping(topping.toppingId)}
                                                >+</button>
                                        </div>
                                    ))
                                    }
                            </div>
                        )
                    }
                    <h2></h2>
                </div>
    
                <div className="modal_footer">
                <button onClick={handleAddToCart}>
                    Add to Cart
                </button>
                </div>
            </div>
            </div>
            <div className="modal_overlay" onClick={closeModal}>

            </div>
        </>
    );
}

export default OrderModal;