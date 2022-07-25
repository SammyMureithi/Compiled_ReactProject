import React from 'react'
import {Link,NavLink,Routes} from 'react-router-dom'
import HomePage from '../Pages/HomePage'

function Header() {
  return (
      <div>
          <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="cart">Cart</NavLink>
              <NavLink to="order">Oders</NavLink>
          </nav>
         
    </div>
  )
}

export default Header