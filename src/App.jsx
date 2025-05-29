import React from "react";
import { BrowserRouter , Routes, Route, Navigate, useLocation,Outlet } from "react-router-dom";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import Cart from "./pages/CartPage";
import About from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';


const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
 return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};


function AppRoutes() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

 
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && isLoggedIn && <Navbar />}

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeButton={false}/>

      <Routes>
         <Route path="/" element={<Login/>} />
       
       
       <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;





