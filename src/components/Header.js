import { Link } from "react-router-dom";

function Header() {
    return ( 
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/toppings">Toppings</Link></li>
                    <li><Link to="/ice-creams">IceCreams</Link></li>
                </ul>
                <h2>Classy Creams</h2>
                <div>
                    <button><Link to="/order">Order</Link></button>
                    <button><Link to="/login">Login</Link></button>
                </div>
            </nav>
        </header>
    );
}

export default Header;