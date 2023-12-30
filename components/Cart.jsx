import React, { useContext } from "react";
import { context } from "./Context";
import "./cart.css";
import Button from "react-bootstrap/Button";

function Cart() {
  const cart = useContext(context);
  const { carts, setState } = cart;
  console.log(carts);

  const remove = (element) => {
    const removeID = parseInt(element.target.id);
    const balanceCart = carts.filter((item) => item.id !== removeID);
    setState(balanceCart);
  };

  return (
    <div className="cart-container">
      <div className="cart-title">CART</div>
      <ul className="cart-items">
        {carts.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-item-details">
              <div className="cart-item-title">{item.title}</div>
              <div
                className="cart-item-price"
                style={{
                  fontFamily: "sanserif",
                  fontWeight: "1000",
                  fontSize: "1.2rem",
                }}
              >
                ₹{item.price}
              </div>
              <Button
                id={item.id}
                onClick={remove}
                className="cart-item-remove"
              >
                REMOVE
              </Button>
             <Button
                
                className=" d-flex block  mt-2  buy-now"
              >
                BUY NOW
              </Button>
            </div> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
