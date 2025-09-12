import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initPerformanceOptimizations } from './utils/performance.js'
import { initAccessibilityFeatures } from './utils/accessibility.js'

// Initialize optimizations
initPerformanceOptimizations();
initAccessibilityFeatures();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)