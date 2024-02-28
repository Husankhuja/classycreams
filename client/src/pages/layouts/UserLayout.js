import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function UserLayout({ children }) {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    if (loading) return;
    if (!user) {
      // redirect to login page
      navigate("/login");
    } else if (user.role !== "USER") {
      // redirect to home page
      alert("You must be a User to access this page");
      navigate("/");
    }
  }, [user, loading]);
  return (
    <>
      {loading && <div>Loading...</div>}
      {children}
    </>
  );
}

export default UserLayout;
