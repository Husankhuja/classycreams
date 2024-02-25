import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [type, setType] = useState('');
  const [basePrice, setBasePrice] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minScoops, setMinScoops] = useState(0);
  const [maxScoops, setMaxScoops] = useState(0);
  const [minSoft, setMinSoft] = useState(0);
  const [maxSoft, setMaxSoft] = useState(0);
  const [freeToppingAmount, setFreeToppingAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name,
      description,
      imageUrl,
      type,
      basePrice,
      calories,
      iceCreamSupport: {
        minScoops,
        maxScoops,
        minSoft,
        maxSoft,
        freeToppingAmount
      }
    };

    addProduct(productData);
  };

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
        <label htmlFor="type">Type:</label>
        <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="CONE">Cone</option>
          <option value="CUP">Cup</option>
          <option value="CAKE">Cake</option>
          <option value="MILKSHAKE">Milkshake</option>
        </select>
      </div>
      <div>
        <label htmlFor="basePrice">Base Price:</label>
        <input type="number" id="basePrice" name="basePrice" value={basePrice} onChange={(e) => setBasePrice(Number(e.target.value))} />
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <input type="number" id="calories" name="calories" value={calories} onChange={(e) => setCalories(Number(e.target.value))} />
      </div>
      <div>
        <label htmlFor="minScoops">Min Scoops:</label>
        <input type="number" id="minScoops" name="minScoops" value={minScoops} onChange={(e) => setMinScoops(Number(e.target.value))} />
      </div>
      <div>
        <label htmlFor="maxScoops">Max Scoops:</label>
        <input type="number" id="maxScoops" name="maxScoops" value={maxScoops} onChange={(e) => setMaxScoops(Number(e.target.value))} />
      </div>
      <div>
        <label htmlFor="minSoft">Min Soft:</label>
        <input type="number" id="minSoft" name="minSoft" value={minSoft} onChange={(e) => setMinSoft(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="maxSoft">Max Soft:</label>
          <input type="number" id="maxSoft" name="maxSoft" value={maxSoft} onChange={(e) => setMaxSoft(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="freeToppingAmount">Free Topping Amount:</label>
          <input type="number" id="freeToppingAmount" name="freeToppingAmount" value={freeToppingAmount} onChange={(e) => setFreeToppingAmount(Number(e.target.value))} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    );
  };
  
  export default AddProductForm;
  