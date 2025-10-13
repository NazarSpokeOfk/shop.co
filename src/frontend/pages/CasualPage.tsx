import React from 'react';
import Header from '../components/Header/Header';
import BreadcrumbsCasual from '../components/Breadcrumbs/BreadcrumbsCasual';
import Filters from '../components/Filters/Filters';
import ProductsGrid from '../components/ProductsGrid/ProductsGrid';
import Pagination from '../components/Pagination/Pagination';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import '../App.css';

const CasualPage = () => {
  return (
    <div className="app">
      <Header />
      <div className="page-container">
        <BreadcrumbsCasual />
        <div className="catalog-layout">
          <aside className="filters-sidebar">
            <Filters />
          </aside>
          <main className="products-main">
            <ProductsGrid />
            <Pagination />
          </main>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CasualPage;