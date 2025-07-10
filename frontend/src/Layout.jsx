import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div className='flex flex-col bg-gray-600 h-screen text-white'>
      <Header/>
      <div className='flex-grow'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
