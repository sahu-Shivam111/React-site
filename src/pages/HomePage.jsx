import  { useEffect, useState } from "react";
import "./HomePage.css";
import { toast } from "react-toastify";

function Home() {
  const [productlist, setproductlist] = useState([]);
  const [selectedproduct, setselectedproduct] = useState(null);

 useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setproductlist(data))
      .catch(() => {
        toast.error("Failed to load products.");
      });
  }, []);


  const addtocart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let exist = cart.find(item => item.id === product.id);

    if (!exist) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success(`${product.title} added to cart`);
    } else {
      toast.info(`${product.title} Its already in cart `);
    }
  };

  const buynow = (product) => {
    setselectedproduct(product);
  };

  const close = () => {
    setselectedproduct(null);
  };

  return (
    <div className="home-container">
      <h2>WELCOME TO QUICK CART</h2>

      <div className="product-list">
        {productlist.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <b>${product.price}</b>

            <div className="button-group">
              <button onClick={() => addtocart(product)}>Add to Cart</button>
              <button onClick={() => buynow(product)}>Buy</button>
            </div>
          </div>
        ))}
      </div>

  
      {selectedproduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={close}>X</button>
            <h3>{selectedproduct.title}</h3>
            <img src={selectedproduct.image} alt={selectedproduct.title} />
             <p> {selectedproduct.description}</p>
            <p className="price-highlight">Price: ${selectedproduct.price}</p>
            <button
              className="confirm-btn"
              onClick={() => {
                toast.success("Purchase successful!");
                close();
              }}
            >
              Buy 
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;





