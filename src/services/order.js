import config from "../config";

export async function ordersRequest() {
    let response = await fetch(`${config.apiAddress}orders`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        "mode": "cors",
    });
    return response;
}

export async function placeOrderRequest(checkoutData) {
    let response = await fetch(`${config.apiAddress}orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        "mode": "cors",
        body: JSON.stringify(checkoutData),
    });
    return response;
}
