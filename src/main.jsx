import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header/Header.jsx'
import { RouterProvider } from 'react-router-dom'

const router=

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
)
