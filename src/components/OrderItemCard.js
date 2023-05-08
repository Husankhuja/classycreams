function OrderItemCard ({item, openModal}) {
    const handleClick = () => {
        openModal(item);
    }

    return (
        <div className="order_item_card" onClick={handleClick}>
            <div className="item_details">
                <div>
                    <h3>{item.name}</h3>
                    <p className="item_description">{item.description}</p>
                </div>
                <p className="item_price">{item.basePrice}</p>
            </div>
            
            <img 
                className="item_image"
                src={item.imageUrl}
                alt={item.name} 
            />
        </div>
    );
}

export default OrderItemCard;