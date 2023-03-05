import { useState, useEffect } from "react";
import LayoutPage from "./LayoutPage";

function ToppingPage() {
    const [toppings, setToppings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/toppings")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToppings(data);
            });
    }, []);

    return (
        <LayoutPage>
            <h1>Toppings</h1>
            {toppings.map((topping) => (
                <div key={topping.toppingId}>
                    <h2>{topping.name}</h2>
                    <p>{topping.description}</p>
                    <p>{topping.price}</p>
                </div>
            ))}
        </LayoutPage>
    );
}

export default ToppingPage;