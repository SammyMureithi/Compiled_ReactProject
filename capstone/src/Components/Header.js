import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {Context} from "../Context"

function Header() {
  const {cartItems}=useContext(Context)
  return (
      <div>
          <header>
              <Link to="/">
              <h2>Pic Some</h2>
              </Link>
        <Link to="cart">
          
              {cartItems.length >0 ?<img src='../images/cart2.png' alt='cart'/>:"" }
            </Link>
          
        </header>
    </div>
  )
}

export default Header