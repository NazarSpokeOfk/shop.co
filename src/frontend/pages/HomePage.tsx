import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Brands from '../components/Brands/Brands';
import ProductsSection from '../components/ProductsSection/ProductsSection';
import DressStyle from '../components/DressStyle/DressStyle';
import Customers from '../components/Customers/Customers';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import '../App.css';

const HomePage = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Brands />
      <ProductsSection />
      <DressStyle />
      <Customers />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;