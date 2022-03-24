import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai/";
import { AiOutlineUser } from "react-icons/ai";

export const Cart = () => {
  return (
    <div className='user-icons'>
      <AiOutlineUser className='icon-user' />
      <div className='cart-icon-container'>
        <AiOutlineShoppingCart className='icon-user' />
        <span className='cart-number'>0</span>
      </div>
    </div>
  );
};
