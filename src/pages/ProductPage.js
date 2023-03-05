import { useState, useEffect } from "react";
import LayoutPage from "./LayoutPage";

function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
    }, []);

    return (
        <LayoutPage>
            <h1>Products</h1>
            {products.map((product) => (
                <div key={product.productId}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </LayoutPage>
    );
}

export default ProductPage;