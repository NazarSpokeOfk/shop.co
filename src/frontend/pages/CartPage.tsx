import React from 'react';
import Header from '../components/Header/Header';
import BreadcrumbsCart from '../components/Breadcrumbs/BreadcrumbsCart';
import CartItems from '../components/CartItems/CartItems';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import '../App.css';

const CartPage = () => {
  return (
    <div className="app">
      <Header />
      <div className="page-container">
        <BreadcrumbsCart />
        <div className="cart-layout">
          <CartItems />
          <OrderSummary />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CartPage;