import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Leasing from './pages/Leasing';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Articles from "./pages/Articles";
import ReadArticles from "./pages/ReadArticle";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/location" element={<Leasing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/article" element={<Articles />} />
                <Route path="/article/:id" element={<ReadArticles />} />
            </Routes>
        </Router>
    </React.StrictMode>,

);
