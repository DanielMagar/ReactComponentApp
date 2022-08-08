import React from "react";
import LeftArrow from "../images/LeftArrow.png";
import CartIcon from "../images/cart.png";

const Cart = () => {
  return (
    <div className="border-4 mt-5 h-[850px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full">
      <div>Cart</div>
      <header>
        <div className="continue-shopping">
          <img src={LeftArrow} alt="arrow" className="arrow-icon" />
          <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <i className="bx bxs-cart-alt " />
          <p>7</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">7</span> items in
          shopping cart
        </p>
        <div className="cart-items">
          <div className="items-info">
            <div className="product-img">
              <img
                src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="img"
              />
            </div>
            <div className="title">
              <h2>Samsung s21</h2>
              <p>Black Color</p>
            </div>
            <div className="add-minus-quantity">
              <i className="bx bx-minus minu"></i>
              <input type="text" className="text" placeholder="2" />
              <i className="bx bx-plus add"></i>
            </div>
            <div className="price">
              <h3>20000 rs</h3>
            </div>
            <div className="remove-item">
              <i className="bx bx-x"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
