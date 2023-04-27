export async function productRequest() {
    let response = await fetch("http://classy-creams.herokuapp.com/api/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export async function toppingRequest() {
    let response = await fetch("http://classy-creams.herokuapp.com/api/toppings", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}

export async function iceCreamRequest() {
    let response = await fetch("http://classy-creams.herokuapp.com/api/ice-creams", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response;
}