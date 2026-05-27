// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackToTopButton from './components/common/BackToTopButton';
import NewsletterModal from './components/common/NewsletterModal';

import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Services from './sections/Services';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BuyNowPage from './pages/BuyNowPage';
import PaymentPage from './pages/PaymentPage';
import EnzoltProductsPage from './pages/EnzoltProductsPage';
import EnzoltProductDetailPage from './pages/EnzoltProductDetailPage';
import FestonProductsPage from './pages/FestonProductsPage';
import FestonProductDetailPage from './pages/FestonProductDetailPage';
import CombosPage from './pages/CombosPage';
import AllProductsPage from './pages/AllProductsPage';
import DeyeProductsPage from './pages/DeyeProductsPage';
import DeyeProductDetailPage from './pages/DeyeProductDetailPage';
import WareeProductsPage from './pages/WareeProductsPage';
import WareeProductDetailPage from './pages/WareeProductDetailPage';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => { setIsModalOpen(true); }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-products" element={<AllProductsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:categoryId" element={<ProductsPage />} />
            <Route path="/products/:categoryId/:productId" element={<ProductDetailPage />} />
            <Route path="/enzolt-products" element={<EnzoltProductsPage />} />
            <Route path="/enzolt-products/:categoryId" element={<EnzoltProductsPage />} />
            <Route path="/enzolt-products/:categoryId/:productId" element={<EnzoltProductDetailPage />} />
            <Route path="/feston-products" element={<FestonProductsPage />} />
            <Route path="/feston-products/:categoryId" element={<FestonProductsPage />} />
            <Route path="/feston-products/:categoryId/:productId" element={<FestonProductDetailPage />} />
            <Route path="/combos" element={<CombosPage />} />
            <Route path="/deye-products" element={<DeyeProductsPage />} />
            <Route path="/deye-products/:categoryId" element={<DeyeProductsPage />} />
            <Route path="/deye-products/:categoryId/:productId" element={<DeyeProductDetailPage />} />
            <Route path="/waree-products" element={<WareeProductsPage />} />
            <Route path="/waree-products/:categoryId" element={<WareeProductsPage />} />
            <Route path="/waree-products/:categoryId/:productId" element={<WareeProductDetailPage />} />
            <Route path="/buy-now/:categoryId/:productId" element={<BuyNowPage />} />
            <Route path="/payment/:categoryId/:productId/:variantId" element={<PaymentPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:key" element={<ServiceDetailPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
        <AnimatePresence>
          {isModalOpen && <NewsletterModal onClose={() => setIsModalOpen(false)} />}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
