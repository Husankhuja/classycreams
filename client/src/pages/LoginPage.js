import { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    return (
        <div>
            <div>
                <h1>login</h1>
                <p>This is the login page</p>                
            </div>
            <div>
                <form onSubmit={login}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <button type="submit" >Login</button>
                </form>
                <p>Don't have an account? <Link to="/register">Sign up!</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;