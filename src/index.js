import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import WhatWeDo from './components/WhatWeDo'
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/colleges" element={<WhyChooseUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


