import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/Auth';
import 'antd/dist/reset.css';
import { CartProvider } from './contexts/Cart';
const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

root.render(
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>
);
