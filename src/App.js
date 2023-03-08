import { Route, Routes } from "react-router-dom";

// styles
import './styles/App.css';
import './styles/Header.css';
import './styles/Card.css';
import './styles/ItemPage.css';
import './styles/OrderItemCard.css';
import './styles/Modal.css';

// pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from "./pages/ProductPage";
import ToppingPage from "./pages/ToppingPage";
import OrderPage from "./pages/OrderPage";
import IceCreamPage from "./pages/IceCreamPage";
import AdminLayout from "./pages/AdminLayout";

// contexts
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from "./contexts/CartContext";
import LayoutPage from "./pages/LayoutPage";



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
              <Route path="/admin" >
                <Route path="/admin/" element={<AdminLayout/>} />
                <Route path="/admin/hi" element={<ToppingPage/>} />
              </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>

    </div>
  );
}

export default App;
