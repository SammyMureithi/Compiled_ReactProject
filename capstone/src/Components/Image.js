import React, { useContext, useState } from "react"
import { Context } from "../Context"

function Image( { className, img ,i} ) {
  const [hover, setHover] = useState( false )
  const { toggle,addToCart,cartItems,removeFromCart} = useContext( Context )
  
  function handleHover() {
  
    setHover( prevState => !prevState )
  }
  
  function heartIcon() {
    if(img.isFavorite) {
        return <i className="ri-heart-fill favorite" onClick={() => toggle(img.id)}></i>
    }
    else if ( hover ) {
        return <i className="ri-heart-line favorite" onClick={() => toggle(img.id)}></i>
    }
  }
  function cartIcon() {
    const isAlreadyInCart = cartItems.some( items => items.id === img.id )
    if ( isAlreadyInCart ) {

      return <i className="ri-shopping-cart-fill cart" onClick={() =>removeFromCart(img.id)}></i>
    }
    else if ( hover ) {
        return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    }
  }
    
//const cartIcon = hover && <i className="ri-add-circle-line cart" onClick={() => addToCart(img) }></i>

    return (
      <div className={`${className} image-container`}
        onMouseOver={handleHover} onMouseOut={handleHover}>
        <img src={img.url} className="image-grid" />
        {heartIcon()}
        {cartIcon()}
        </div>
    )
}

export default Image