import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-3g0j7x1kq6v8z2qf.us.auth0.com"
      clientId="4r5X9Q6Z5G7F8H9J0K1L2M3N4O5P6Q7R"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <App />
    </Auth0Provider>
  </StrictMode>,
)
