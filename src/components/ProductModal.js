import { useContext } from "react";
import cartContext from "../contexts/CartContext";

function ProductModal ({ product, closeModal }) {
    const { addItem } = useContext(cartContext);
    return (
        <>
            <div className="modal">
            <div className="modal_content">
                <div className="modal_header">
                <h3>{product.name}</h3>
                <span className="close" onClick={closeModal}>&times;</span>
                </div>
                <div className="modal_body">
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
                <p>${product.basePrice}</p>
                </div>
                <div className="modal_footer">
                <button onClick={() => addItem(product)}>
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