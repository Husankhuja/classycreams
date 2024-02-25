import { useState } from "react";

const EditToppingForm = ({ topping, editTopping }) => {
    const [name, setName] = useState(topping.name);
    const [description, setDescription] = useState(topping.description);
    const [imageUrl, setImageUrl] = useState(topping.imageUrl);
    const [basePrice, setBasePrice] = useState(topping.basePrice);
    const [calories, setCalories] = useState(topping.calories);

    const handleSubmit = (e) => {
        e.preventDefault();

        const toppingData = {
            name,
            description,
            imageUrl,
            basePrice,
            calories
        };

        editTopping(topping.toppingId, toppingData);
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input type="text" id="imageUrl" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <div>
          <label htmlFor="basePrice">Base Price:</label>
          <input type="number" id="basePrice" name="basePrice" value={basePrice} onChange={(e) => setBasePrice(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="calories">Calories:</label>
          <input type="number" id="calories" name="calories" value={calories} onChange={(e) => setCalories(Number(e.target.value))} />
        </div>
        <button type="submit">Edit Topping</button>
      </form>
    );
  };
  

  export default EditToppingForm;