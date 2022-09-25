import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ScrollToTop from './components/ScrollToTop'
import { AppProvider } from './context/AppContext'
import { BrowserRouter } from "react-router-dom";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppProvider>
    <ScrollToTop />
      <App />
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
)
