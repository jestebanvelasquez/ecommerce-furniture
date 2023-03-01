import React, { FC } from 'react'
import { NavBar,Footer,Header } from '../components'
import { Outlet } from 'react-router-dom'




export const RouterLayout:FC<{}> = () => {
  return (
    <>
        <Header/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
