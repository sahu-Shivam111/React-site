
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navleft">
        <Link to="/home" className="navlogo">
          Quick Cart Shop
        </Link>
      </div>
      <div className="navcenter">
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart </Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className="navright">
        <button onClick={handleLogout} className="logoutbtn">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;





