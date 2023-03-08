import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";


function Header({openCart}) {
    const {user, logout} = useContext(AuthContext);  
    return (
        <header>
            <h2>Classy Creams</h2>

            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/">About Us</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/toppings">Toppings</Link>
                    <Link to="/ice-creams">IceCreams</Link>    
                </nav>
                <div className="buttons">
                    <button><Link to="/order">Order</Link></button>
                    {
                        user ? 
                            (<button onClick={logout}>Logout</button>): 
                            (<button><Link to="/login">Login</Link></button>)
                            
                    }
                    <button onClick={openCart}>Cart</button>
                </div>
            </div>

        </header>
    );
}

export default Header;