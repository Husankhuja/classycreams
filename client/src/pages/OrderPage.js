import { useState, useEffect } from "react";

import { productRequest } from "../services/product";
import LayoutPage from "./LayoutPage";
import OrderModal from "../components/OrderModal";
import OrderItemCard from "../components/OrderItemCard";

function OrderPage() {
    const [products, setProducts] = useState([]);
    const [selectedProdcut, setSelectedProduct] = useState(null);

    useEffect(() => {
        productRequest()
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
                    <OrderItemCard item={product} openModal={openModal} />  
                ))
            }
            <h2>Cake</h2>
            {
                products.filter(product => ["CAKE"].includes(product.type)).map((product) => (
                    <OrderItemCard item={product} openModal={openModal} />  
                ))
            }
            <h2>Milkshake</h2>
            {
                products.filter(product => ["MILKSHAKE"].includes(product.type)).map((product) => (
                    <OrderItemCard item={product} openModal={openModal} />
                ))
            }
            {
                selectedProdcut && (
                    <OrderModal product={selectedProdcut} closeModal={closeModal} />
                )
            }
        </LayoutPage>
    );
}

export default OrderPage;