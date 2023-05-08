import { useState } from "react"

const EditProductForm = ({ product, editProduct }) => {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [imageUrl, setImageUrl] = useState(product.imageUrl);
    const [type, setType] = useState(product.type);
    const [basePrice, setBasePrice] = useState(product.basePrice);
    const [calories, setCalories] = useState(product.calories);
    const [minScoops, setMinScoops] = useState(product.iceCreamSupport.minScoops);
    const [maxScoops, setMaxScoops] = useState(product.iceCreamSupport.maxScoops);
    const [minSoft, setMinSoft] = useState(product.iceCreamSupport.minSoft);
    const [maxSoft, setMaxSoft] = useState(product.iceCreamSupport.maxSoft);
    const [freeToppingAmount, setFreeToppingAmount] = useState(product.iceCreamSupport.freeToppingAmount);


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
                iceCreamSupportId: product.iceCreamSupport.iceCreamSupportId,
                minScoops,
                maxScoops,
                minSoft,
                maxSoft,
                freeToppingAmount
            }
        };

        editProduct(product.productId ,productData);
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
        <label htmlFor="type">Type:</label>
        <input type="text" id="type" name="type" value={type} onChange={(e) => setType(e.target.value)} />
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
        <button type="submit">Submit</button>
    </form>
    )

}

export default EditProductForm;