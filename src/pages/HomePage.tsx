import React from 'react'
import { Header } from '../components/Header'
import { Products, Categories, About } from '../components/sections'

export const HomePage = () => {
  return (
        <>
        {/* agregando una imagen de background */}
          <div className='hero'></div>
            <Categories/>
            <About/>
            <Products />
        </>
  )
}
