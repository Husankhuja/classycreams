export async function loginRequest (email, password) {
    let response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({'email': email, 'password': password}),
    });
    return response;
}

export async function registerRequest (email, firstName, lastName, password, password2) {
    let response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({email, firstName, lastName, password, password2}),
    });
    return response;
}