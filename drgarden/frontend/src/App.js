import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // استخدام Routes بدلاً من Switch
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ArticleList from './components/ArticleList';
import ProductList from './components/ProductList';
import Forum from './components/Forum';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
