import React from 'react'
import { Link } from 'react-router-dom'
import { navigationData } from '../data'

export const NavBar = () => {
  return (
    <div className='container-nav'>

      <nav className='nav-ppal contenedor'>
        {
          navigationData.map((item, i) => (
            <a key={i}>
              <Link to={`/${item.href}`}>{item.title}</Link>
            </a>
          ))
        }
      </nav>
    </div>
  )
}
