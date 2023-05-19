import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Routers/Routers.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='md:px-16 mx-auto font-custom'>
    <React.StrictMode>
    <AuthProvider>
      <RouterProvider  router={router} />
    </AuthProvider>
  </React.StrictMode>
  </div>,
)
