import React from 'react'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'

// Root Routes

const router = createBrowserRouter([
  {
    path: '/',
    element: <div> Root Router</div>
  },
  {
    path: '/register',
    element: <div>Register ROuter</div>
  }
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