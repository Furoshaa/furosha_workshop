import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Home from './pages/home'
import ProductsCategory from './pages/products/ProductsCategory'
import ProductList from './pages/products/PS3/ProductList'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<ProductsCategory />} />
        <Route path="/ps3" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
