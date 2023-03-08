import { useContext } from "react";
import cartContext from "../contexts/CartContext";

function ProductModal ({ product, closeModal }) {
    const { addItem } = useContext(cartContext);
    return (
        <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
            <h3>{product.name}</h3>
            <span className="close" onClick={closeModal}>&times;</span>
            </div>
            <div className="modal-body">
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            </div>
            <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => addItem(product)}>
                Add to Cart
            </button>
            </div>
        </div>
        </div>
    );
}

export default ProductModal;