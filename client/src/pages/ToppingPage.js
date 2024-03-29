import { useState, useEffect } from "react";
import LayoutPage from "./LayoutPage";
import CardGrid from "../components/CardGrid";
import { toppingRequest } from "../services/product";

function ToppingPage() {
    const [toppings, setToppings] = useState([]);

    useEffect(() => {
        toppingRequest()
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToppings(data);
            });
    }, []);

    return (
        <LayoutPage>
            <div className="item_page">
                <h1 className="item_page_title">Toppings</h1>
                <CardGrid items={toppings} />
            </div>
        </LayoutPage>
    );
}

export default ToppingPage;