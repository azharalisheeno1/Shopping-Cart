import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Hero from "./Components/Hero";
import Cart from "./Components/Cart"
import ContextProvider from './Features/ContextProvider.jsx';

const router= createBrowserRouter([{path:"/",element:<App></App>,children:[{index:true,element:<Hero></Hero>},{path:"/cart",element:<Cart></Cart>}]},])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
  <ContextProvider>  <RouterProvider router={router}>
    
  </RouterProvider>
  </ContextProvider>

  </React.StrictMode>,
)
