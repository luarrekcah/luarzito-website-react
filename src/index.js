import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './utils/vercel/reportWebVitals';
import { sendToVercelAnalytics } from './utils/vercel/vitals';

import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
