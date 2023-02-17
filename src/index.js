import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css';
import reportWebVitals from './utils/vercel/reportWebVitals';
import { sendToVercelAnalytics } from './utils/vercel/vitals';

import Home from './pages/Home';
import PolicyPrivacy from './pages/Pop';
import TermsOfService from './pages/Tos';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pop" element={<PolicyPrivacy />} />
        <Route path="/tos" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
