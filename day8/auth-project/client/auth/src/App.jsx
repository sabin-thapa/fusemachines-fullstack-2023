import React from 'react'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'

// Import components
import Register from './components/Register'

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