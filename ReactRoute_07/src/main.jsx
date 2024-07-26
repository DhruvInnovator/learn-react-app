import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact us/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'
// import Github, { gitHubInfoLoader } from './components/Github/Github'

// Method 1
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path : '/',
        element: <Home />
      },
      {
        path : '/about',
        element: <About />
      },
      {
        path : '/contact',
        element: <Contact />
      },
      {
        path : '/user/:UserId',
        element: <User />
      },
      {
        path : '/github',
        element: <Github />,
        // loader: {gitHubInfoLoader}
      },
    ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
