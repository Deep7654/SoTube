import Home from "./components/Home/Home"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import Layout from "./Layout"


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
