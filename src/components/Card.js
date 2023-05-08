function Card({ item }) {
    return (
        <div className="card">
            <div className="card_img_container">
            <img src={item.imageUrl ||  "https://as1.ftcdn.net/v2/jpg/02/86/63/44/1000_F_286634408_rRsYpLK1veXlZoy7EoTAkLmB5zVTj2tR.jpg"} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <hr />
            <p className="description">{item.description}</p>
            <p>{item.basePrice}</p>
        </div>
    );
}

export default Card;