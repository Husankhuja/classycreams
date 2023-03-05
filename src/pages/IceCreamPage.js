import { useState, useEffect } from "react";
import LayoutPage from "./LayoutPage";

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
            {iceCreams.map((iceCream) => (
                <div key={iceCream.iceCreamId}>
                    <h2>{iceCream.name}</h2>
                    <p>{iceCream.description}</p>
                    <p>{iceCream.price}</p>
                </div>
            ))}
        </LayoutPage>
    );
}

export default IceCreamPage;