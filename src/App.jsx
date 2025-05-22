import React from "react";
import { BrowserRouter , Routes, Route, Navigate, useLocation } from "react-router-dom";
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
  return isLoggedIn ? children : <Navigate to="/login" />;
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
        <Route path="/home" element={< ProtectedRoute><Home /></ ProtectedRoute>} />
        <Route path="/cart" element={< ProtectedRoute><Cart /></ ProtectedRoute>} />
        <Route path="/about" element={< ProtectedRoute><About /></ ProtectedRoute>} />
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





