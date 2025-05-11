import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Pokemon-explorer">
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
