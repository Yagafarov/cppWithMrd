import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Write from "./pages/Write"
import NavbarM from './components/NavbarM'
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Tutorial from './pages/Tutorial'
import About from './pages/About'
import { Container } from 'react-bootstrap'

import './App.css'
import AdminM from './pages/AdminM'

const Layout = () => {
  return (
    <>
      <NavbarM />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/write',
          element: <Write />
        },
        {
          path: '/tutorial',
          element: <Tutorial />
        },
        {
          path: '/about',
          element: <About />
        },
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/admin',
      element: <AdminM />
    },
  ]
)

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}



export default App