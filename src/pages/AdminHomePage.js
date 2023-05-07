import { useState, useEffect } from "react";
import AdminLayout from "./AdminLayout";
import { 
    productRequest, 
    iceCreamRequest, 
    toppingRequest,
    productDeleteRequest,
    iceCreamDeleteRequest,
    toppingDeleteRequest,
    productAddRequest,
    iceCreamAddRequest,
    toppingAddRequest
} from "../services/product";
import Table from "../components/Table";
import AddProductForm from "../components/AddProductForm";
import AddIceCreamForm from "../components/AddIceCreamForm";
import AddToppingForm from "../components/AddToppingForm";
import Modal from "../components/Modal";

const AdminHomePage = () => {
    const [products, setProducts] = useState([]);
    const [iceCreams, setIceCreams] = useState([]);
    const [toppings, setToppings] = useState([]);
    const [orders, setOrders] = useState([]);
    const [displayAddProduct, setDisplayAddProduct] = useState(false);
    const [displayAddIceCream, setDisplayAddIceCream] = useState(false);
    const [displayAddTopping, setDisplayAddTopping] = useState(false);

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

    const addProduct = (product) => {
        productAddRequest(product)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts([...products, data]);
            })
            .catch((err) => console.log(err));
            setDisplayAddProduct(false);
    };

    const addIceCream = (iceCream) => {
        iceCreamAddRequest(iceCream)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIceCreams([...iceCreams, data]);
            })
            .catch((err) => console.log(err));
            setDisplayAddIceCream(false);
    };

    const addTopping = (topping) => {
        toppingAddRequest(topping)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToppings([...toppings, data]);
            })
            .catch((err) => console.log(err));
            setDisplayAddTopping(false);
    };

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
            <button onClick={() => {setDisplayAddProduct(true)}}>Add Product</button>
            <Table data={products} deleteItem={deleteProduct} />
            <h2>Ice Creams</h2>
            <button onClick={() => {setDisplayAddIceCream(true)}}>Add Ice Cream</button>
            <Table data={iceCreams} deleteItem={deleteIceCream} />
            <h2>Toppings</h2>
            <button onClick={() => {setDisplayAddTopping(true)}}>Add Topping</button>
            <Table data={toppings} deleteItem={deleteTopping} />
            <h2>Orders</h2>

            {
                displayAddProduct && (
                    <Modal closeModal={() => setDisplayAddProduct(false)} title="Add Product">
                        <AddProductForm addProduct={addProduct}/>
                    </Modal>
                )
            }
            {
                displayAddIceCream && (
                    <Modal closeModal={() => setDisplayAddIceCream(false)} title="Add Ice Cream">
                        <AddIceCreamForm addIceCream={addIceCream}/>
                    </Modal>
                )
            }
            {
                displayAddTopping && (
                    <Modal closeModal={() => setDisplayAddTopping(false)} title="Add Topping">
                        <AddToppingForm addTopping={addTopping}/>
                    </Modal>
                )
            }        
        </AdminLayout>
    );
}

export default AdminHomePage;