import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact us/Contact'

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
    ]}
])
// Method 2
//  const Router = createBrowserRouter(
//   createRoutesFromElements(
//   <Route 
//     path = '/'
//     Element = {<Layout/>}>
//       <Route path='/'
//         Element = {<Home/>}
//       />
//       <Route path='/about'
//         Element = {<About/>}
//       />
//       <Route path='/contact'
//         Element = {<Contact/>}
//       />
//   </Route>
   
//  ))


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
