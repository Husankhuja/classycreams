import { useState, useEffect } from "react";
import LayoutPage from "./LayoutPage";
import CardGrid from "../components/CardGrid";

function IceCreamPage() {
    const [iceCreams, setIceCreams] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/ice-creams")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIceCreams(data);
            });
    }, []);

    return (
        <LayoutPage>
            <div className="item_page">
                <h1 className="item_page_title">Ice Creams</h1>
                <CardGrid items={iceCreams} />
            </div>

        </LayoutPage>
    );
}

export default IceCreamPage;