import React from 'react';
import Header from '../components/Header/Header';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import Reviews from '../components/Reviews/Reviews';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import '../App.css';

const ProductPage = () => {
  return (
    <div className="app">
      <Header />
      <div className="page-container">
        <Breadcrumbs />
        <ProductDetail />
        <Reviews />
        <RelatedProducts />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;