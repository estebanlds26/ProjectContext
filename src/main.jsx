import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShopProvider } from './context/ShopContext'
import { App } from './App'
import './styles/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </StrictMode>,
)
