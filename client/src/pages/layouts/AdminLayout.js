import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function AdminLayout({ children }) {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    if (loading) return;
    if (!user) {
      // redirect to login page
      navigate("/login");
    } else if (user.role !== "ADMIN") {
      // redirect to home page
      navigate("/");
    }
  }, [user, loading, navigate]);
  return (
    <>
      {loading && <div>Loading...</div>}
      {children}
    </>
  );
}

export default AdminLayout;
