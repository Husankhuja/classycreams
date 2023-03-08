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
            <h1>IceCreams</h1>
            <CardGrid items={iceCreams} />
        </LayoutPage>
    );
}

export default IceCreamPage;