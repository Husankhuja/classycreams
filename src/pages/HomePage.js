import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <p>This is the Home Page</p>
      { user ? <p>Logged in as {user.firstName} {user.lastName} </p> : null }

      { user ? <button onClick={logout}>Logout</button> : 
        <p><Link to="/login">login</Link></p>
      }
    </div>
  );
};

export default HomePage;