import { Route, Routes } from "react-router-dom";

// styles
import './styles/App.css';
import './styles/Header.css';
import './styles/Card.css';
import './styles/ItemPage.css';
import './styles/OrderItemCard.css';
import './styles/Modal.css';
import './styles/Cart.css';
import './styles/Table.css';

// pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from "./pages/ProductPage";
import ToppingPage from "./pages/ToppingPage";
import OrderPage from "./pages/OrderPage";
import IceCreamPage from "./pages/IceCreamPage";
import CheckoutPage from "./pages/CheckoutPage";
import AdminHomePage from "./pages/AdminHomePage";

// contexts
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from "./contexts/CartContext";



function App() {
  return (
    <div className="App">
      <AuthProvider>  
        <CartProvider>
          <Routes> 
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductPage/>} />
              <Route path="/toppings" element={<ToppingPage />} />
              <Route path="/ice-creams" element={<IceCreamPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/admin" >
                <Route path="/admin/" element={<AdminHomePage/>} />
              </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>

    </div>
  );
}

export default App;
