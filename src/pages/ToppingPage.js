import { useState, useEffect } from "react";
import LayoutPage from "./LayoutPage";
import CardGrid from "../components/CardGrid";

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
            <CardGrid items={toppings} />
        </LayoutPage>
    );
}

export default ToppingPage;