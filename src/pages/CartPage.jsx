import React, { useEffect, useState } from "react";
import "./CartPage.css";

function Cart() {
  const [cart, setcart] = useState([]);
  const [showtotal, setshowtotal] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setcart(saved);
  }, []);
   
  const remove = (i) => {
    const updated = [...cart];
    updated.splice(i, 1);
    setcart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = () => {
    return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>🛒 My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item, i) => (
            <div className="cart-item" key={i}>
              <img src={item.image} alt={item.title} />
              <div className="cart-details">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p><b>${item.price}</b></p>
                <button onClick={() => remove(i)}>Remove from Cart</button>
              </div>
            </div>
          ))}
          <button className="buy-now" onClick={() => setshowtotal(true)}>Buy Now</button>
        </div>
      )}

      {showtotal && (
        <div className="popup-overlay" onClick={() => setshowtotal(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h3>Total Amount</h3>
            <p><b>${total()}</b> for {cart.length} items</p>
            <button onClick={() => setshowtotal(false)}>Buy</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;


