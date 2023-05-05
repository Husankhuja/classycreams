import config from "../config";

export async function productRequest() {
    let response = await fetch(`${config.apiAddress}products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export async function toppingRequest() {
    let response = await fetch(`${config.apiAddress}toppings`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export async function iceCreamRequest() {
    let response = await fetch(`${config.apiAddress}ice-creams`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export async function productDeleteRequest(id) {
    let response = await fetch(`${config.apiAddress}products/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        "mode": "cors",
    });
    return response;
}

export async function toppingDeleteRequest(id) {
    let response = await fetch(`${config.apiAddress}toppings/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        "mode": "cors",
    });
    return response;
}

export async function iceCreamDeleteRequest(id) {
    // add bearer token to headers
    let response = await fetch(`${config.apiAddress}ice-creams/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        "mode": "cors",
    });
    return response;
}