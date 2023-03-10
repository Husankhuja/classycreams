export async function productRequest() {
    let response = await fetch("http://localhost:8080/api/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export async function toppingRequest() {
    let response = await fetch("http://localhost:8080/api/toppings", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export async function iceCreamRequest() {
    let response = await fetch("http://localhost:8080/api/ice-creams", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}