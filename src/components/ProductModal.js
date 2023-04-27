import { useContext, useEffect, useState } from "react";
import cartContext from "../contexts/CartContext";
import { iceCreamRequest, toppingRequest } from "../services/product";

function ProductModal ({ product, closeModal }) {
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
            topping.toppingId = toppingId ?
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
                        src="data:image/jpeg;base64,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" 
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

export default ProductModal;