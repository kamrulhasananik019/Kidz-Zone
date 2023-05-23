import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Routers/Routers.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
import Aos from 'aos'
import 'aos/dist/aos.css';

Aos.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='md:px-16 mx-auto font-custom'>
    <React.StrictMode>
      <HelmetProvider>
      <AuthProvider>
      <RouterProvider  router={router} />
    </AuthProvider>
      </HelmetProvider>
    
  </React.StrictMode>
  </div>,
)
