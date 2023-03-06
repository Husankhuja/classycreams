import { useState, useEffect } from "react";

import LayoutPage from "./LayoutPage";
import ProductModal from "../components/ProductModal";

function OrderPage() {
    const [products, setProducts] = useState([]);
    const [selectedProdcut, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    }, []);

    const closeModal = () => {
        setSelectedProduct(null);
    }

    const openModal = (product) => {
        setSelectedProduct(product);
    }

    return (
        <LayoutPage>
            <h1>Products</h1>
            <h2>IceCream Cone and Cups</h2>
            {
                products.filter(product => ["CONE", "CUP"].includes(product.type)).map((product) => (
                    <div key={product.productId}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <button onClick={() => openModal(product)}>Add to Cart</button>
                    </div>
                ))
            }
            {
                selectedProdcut && (
                    <ProductModal product={selectedProdcut} closeModal={closeModal} />
                )
            }
        </LayoutPage>
    );
}

export default OrderPage;