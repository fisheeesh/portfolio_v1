import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router/index.jsx'
import { reportWebVitals } from './ReportWebVitals.js';

createRoot(document.getElementById('root')).render(
  <Router />
)
if (import.meta.env.MODE !== 'production') {
  reportWebVitals();
}
