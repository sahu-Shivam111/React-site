import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handelogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      toast.warn("Please enter both email and password");
    } else {
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img
          src="/login-logo.png"
          alt="QuickCart Logo"
          className="login-logo"
        />
        <h2>Login Page</h2>
        <form onSubmit={handelogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;



