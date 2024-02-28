import { useState } from "react";

const EditIceCreamForm = ({ iceCream, editIceCream }) => {
    const [name, setName] = useState(iceCream.name);
    const [description, setDescription] = useState(iceCream.description);
    const [type, setType] = useState(iceCream.type || 'HARDSCOOPED');
    const [imageUrl, setImageUrl] = useState(iceCream.imageUrl);
    const [basePrice, setBasePrice] = useState(iceCream.basePrice);
    const [calories, setCalories] = useState(iceCream.calories);

    const handleSubmit = (e) => {
        e.preventDefault();

        const iceCreamData = {
            name,
            description,
            type,
            imageUrl,
            basePrice,
            calories
        };

        editIceCream(iceCream.iceCreamId, iceCreamData);
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
        <label htmlFor="type">Type:</label>
        <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="HARDSCOOPED">Hard-scooped</option>
          <option value="SOFTSERVE">Soft-serve</option>
        </select>
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
      <button type="submit">Edit Ice Cream</button>
    </form>
    );
};

export default EditIceCreamForm;
