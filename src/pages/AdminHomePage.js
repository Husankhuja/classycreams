import { useState, useEffect } from "react";
import AdminLayout from "./AdminLayout";
import { 
    productRequest, 
    iceCreamRequest, 
    toppingRequest,
    productDeleteRequest,
    iceCreamDeleteRequest,
    toppingDeleteRequest
} from "../services/product";
import Table from "../components/Table";

const AdminHomePage = () => {
    const [products, setProducts] = useState([]);
    const [iceCreams, setIceCreams] = useState([]);
    const [toppings, setToppings] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        productRequest()
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            });
        iceCreamRequest()
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIceCreams(data);
            });
        toppingRequest()
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToppings(data);
            });
    }, []);

    const deleteProduct = (id) => {
        productDeleteRequest(id)
            .then((res) =>
                setProducts(products.filter((product) => product.productId !== id))
            )
            .catch((err) => console.log(err));
    };

    const deleteIceCream = (id) => {
        iceCreamDeleteRequest(id)
            .then((res) => 
                setIceCreams(iceCreams.filter((iceCream) => iceCream.iceCreamId !== id))
            )
            .catch((err) => console.log(err));
    };

    const deleteTopping = (id) => {
        toppingDeleteRequest(id)
            .then((res) => 
                setToppings(toppings.filter((topping) => topping.toppingId !== id))
            )
            .catch((err) => console.log(err));
    };

    return (
        <AdminLayout>
            <h1>Admin Home Page</h1>
            <h2>Products</h2>
            <Table data={products} deleteItem={deleteProduct} />
            <h2>Ice Creams</h2>
            <Table data={iceCreams} deleteItem={deleteIceCream} />
            <h2>Toppings</h2>
            <Table data={toppings} deleteItem={deleteTopping} />
            <h2>Orders</h2>
        </AdminLayout>
    );
}

export default AdminHomePage;