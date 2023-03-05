import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwt_decode(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                logout();
            } else {
                setAuthToken(token);
                setUser(decodedToken);
            }
        }
    }, []);

    const login = async (e) => {
        e.preventDefault();
        let response = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({'email': e.target.email.value, 'password': e.target.password.value}),
        });

        let data = await response.json();


        if (response.status === 200) {
            console.log(data);
            setAuthToken(data.token);
            const token = jwt_decode(data.token);
            setUser({
                email: token.sub,
                firstName: token.firstName,
                lastName: token.lastName,
            })
            localStorage.setItem("token", data.token);
            navigate("/");
        } else {
            alert('LoginPage failed');
        }
    };

    

    const logout = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem("token");
        navigate("/login");
    };

    const contextData = { authToken, user, login, logout};

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}