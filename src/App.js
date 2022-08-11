import React from 'react';
import './style.css';
import Home from './Home/Home.js';
import Home2 from './Home/Home2.js';
import Header from './Header/Header.js';
import Footer from './Home/Footer.js';
import SearchPage from './SearchPage/SearchPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPage from './ListPage/ListPage.js';
import ListPage2 from './ListPage/ListPage2.js';
import Post from './ListPage/Post.js';
import { useParams } from '@reach/router';
import Hero from './Hero.js';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/room/:slug" element={<ListPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
