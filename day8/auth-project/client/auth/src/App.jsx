import React from 'react'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'

// Import components
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

// Root Routes
const router = createBrowserRouter([
  {
    path: "",
    element: <>HELLO</>
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },

 
])


const App = () => {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  )
}

export default App