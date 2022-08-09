import React, { useContext, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { products } from "./Product";
import { CartContext } from "./Cart";

const ContextCart = ({ LeftArrow }) => {
  const { item, clearCart } = useContext(CartContext);
  if (item.length === 0) {
    return (
      <>
        <div className="border-4 mt-5 h-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full">
          <div>Cart</div>
          <header>
            <div className="continue-shopping">
              <img src={LeftArrow} alt="arrow" className="arrow-icon" />
              <h3>Continue Shopping</h3>
            </div>
            <div className="cart-icon">
              <i className="bx bxs-cart-alt " />
              <p>0</p>
            </div>
          </header>
          <section className="main-cart-section">
            <h1>Shopping Cart</h1>
            <p className="total-items">
              You have <span className="total-items-count">0</span> items in
              shopping cart
            </p>
          </section>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="border-4 mt-5 h-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-full">
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
            <div className="cart-items-container">
              <Scrollbars>
                {item.map((custProduct) => {
                  return <Items key={custProduct.id} {...custProduct} />;
                })}
              </Scrollbars>
            </div>
          </div>
          <div className="card-total mb-10 ">
            <h3>
              Cart Total: <span>22000rs</span>
            </h3>
            <button>Checkout</button>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContextCart;
