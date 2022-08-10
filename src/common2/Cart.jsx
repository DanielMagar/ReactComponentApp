import React, { useState, createContext, useReducer, useEffect } from "react";
import LeftArrow from "../images/LeftArrow.png";
import { products } from "./Product";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const CartContext = createContext();
const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    console.log("Awesome!!");
  }, [state.item]);
  useEffect(() => {}, []);
  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}
    >
      <ContextCart LeftArrow={LeftArrow} />
    </CartContext.Provider>
  );
};

export default Cart;
