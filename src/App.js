import { Route, Routes } from "react-router-dom";

// styles
import './styles/App.css';
// pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// contexts
import { AuthProvider } from './contexts/AuthContext';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <h1>Welcome To ClassyCreams IceCream Shop</h1>
      <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
