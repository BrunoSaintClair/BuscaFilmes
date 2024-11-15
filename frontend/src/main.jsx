import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Error404 from './Pages/Error404.jsx'
import MoviePage from './Pages/MoviePage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/movie/:title",
        element: <MoviePage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
