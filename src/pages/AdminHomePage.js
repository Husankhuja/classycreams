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
    toppingAddRequest,
    productEditRequest,
    iceCreamEditRequest,
    toppingEditRequest
} from "../services/product";
import {ordersRequest} from "../services/order";
import Table from "../components/Table";
import AddProductForm from "../components/AddProductForm";
import AddIceCreamForm from "../components/AddIceCreamForm";
import AddToppingForm from "../components/AddToppingForm";
import EditProductForm from "../components/EditProductForm";
import EditIceCreamForm from "../components/EditIceCreamForm";
import EditToppingForm from "../components/EditToppingForm";
import Modal from "../components/Modal";

const AdminHomePage = () => {
    const [products, setProducts] = useState([]);
    const [iceCreams, setIceCreams] = useState([]);
    const [toppings, setToppings] = useState([]);
    const [orders, setOrders] = useState([]);

    const [displayAddProduct, setDisplayAddProduct] = useState(false);
    const [displayAddIceCream, setDisplayAddIceCream] = useState(false);
    const [displayAddTopping, setDisplayAddTopping] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const [iceCreamToEdit, setIceCreamToEdit] = useState(null);
    const [toppingToEdit, setToppingToEdit] = useState(null);


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
        ordersRequest()
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrders(data);
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
    const editProduct = (id, product) => {
        console.log(id, product);
        productEditRequest(id, product)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(products.map((product) => product.productId === id ? data : product));
            })
            .catch((err) => console.log(err));
        setProductToEdit(null);
    };

    const editIceCream = (id, iceCream) => {
        console.log(id, iceCream);
        iceCreamEditRequest(id, iceCream)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIceCreams(iceCreams.map((iceCream) => iceCream.iceCreamId === id ? data : iceCream));
            })
            .catch((err) => console.log(err));
        setIceCreamToEdit(null);
    };

    const editTopping = (id, topping) => {
        console.log(id, topping);
        toppingEditRequest(id, topping)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToppings(toppings.map((topping) => topping.toppingId === id ? data : topping));
            })
            .catch((err) => console.log(err));
        setToppingToEdit(null);
    };

    return (
        <AdminLayout>
            <h1>Admin Home Page</h1>
            <h2>Products</h2>
            <button onClick={() => {setDisplayAddProduct(true)}}>Add Product</button>
            <Table data={products} deleteItem={deleteProduct} editItem={setProductToEdit} />
            <h2>Ice Creams</h2>
            <button onClick={() => {setDisplayAddIceCream(true)}}>Add Ice Cream</button>
            <Table data={iceCreams} deleteItem={deleteIceCream} editItem={setIceCreamToEdit} />
            <h2>Toppings</h2>
            <button onClick={() => {setDisplayAddTopping(true)}}>Add Topping</button>
            <Table data={toppings} deleteItem={deleteTopping} editItem={setToppingToEdit} />
            <h2>Orders</h2>
            <Table data={orders} />

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
            {
                productToEdit && (
                    <Modal closeModal={() => setProductToEdit(null)} title="Edit Product">
                        <EditProductForm editProduct={editProduct} product={productToEdit}/>
                    </Modal>
                )
            }
            {
                iceCreamToEdit && (
                    <Modal closeModal={() => setIceCreamToEdit(null)} title="Edit Ice Cream">
                        <EditIceCreamForm editIceCream={editIceCream} iceCream={iceCreamToEdit}/>
                    </Modal>
                )
            }
            {
                toppingToEdit && (
                    <Modal closeModal={() => setToppingToEdit(null)} title="Edit Topping">
                        <EditToppingForm editTopping={editTopping} topping={toppingToEdit}/>
                    </Modal>
                )
            }
        </AdminLayout>
    );
}

export default AdminHomePage;