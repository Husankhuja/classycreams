import { useState, useEffect } from "react";
import AdminLayout from "./AdminLayout";
import { productRequest, iceCreamRequest, toppingRequest } from "../services/product";
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

    return (
        <AdminLayout>
            <h1>Admin Home Page</h1>
            <h2>Products</h2>
            <Table data={products} />
            <h2>Ice Creams</h2>
            <Table data={iceCreams} />
            <h2>Toppings</h2>
            <Table data={toppings} />
            <h2>Orders</h2>
        </AdminLayout>
    );
}

export default AdminHomePage;