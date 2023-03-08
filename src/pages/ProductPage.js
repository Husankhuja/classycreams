import { useState, useEffect } from "react";
import LayoutPage from "./LayoutPage";
import CardGrid from "../components/CardGrid";

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
            <CardGrid items={products} />
        </LayoutPage>
    );
}

export default ProductPage;