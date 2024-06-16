// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from '././Componenets/WelcomePage/Welcome';
import Home from '././Componenets/Homepage/Home'; // Assuming you have a Home component
import BooksPage from '././Componenets/BookPages/BooksPages';
import ContactUs from '././Componenets/ContactUs/ContactUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/books" element={<BooksPage/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
};

export default App;