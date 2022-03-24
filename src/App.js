import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CryptoDetails from './components/CryptoDetails';
import Home from './Pages/Home';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path="/coin/:symbol" exactly element={<CryptoDetails />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
