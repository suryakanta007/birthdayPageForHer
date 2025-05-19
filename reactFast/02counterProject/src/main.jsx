import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import Hero from './components/HeroDesign5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Hero/> */}
  </StrictMode>,
)
