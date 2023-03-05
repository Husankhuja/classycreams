import { Route, Routes } from "react-router-dom";

// styles
import './styles/App.css';
// pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from "./pages/ProductPage";
import ToppingPage from "./pages/ToppingPage";
import IceCreamPage from "./pages/IceCreamPage";

// contexts
import { AuthProvider } from './contexts/AuthContext';



function App() {
  return (
    <div className="App">
      <AuthProvider>  
      <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/toppings" element={<ToppingPage />} />
          <Route path="/ice-creams" element={<IceCreamPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
