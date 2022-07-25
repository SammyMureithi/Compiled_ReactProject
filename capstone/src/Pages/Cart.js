import React, {useState,useContext } from 'react'
import { Context } from '../Context'
import CartItem from '../Components/CartItem'

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const { cartItems,emptyCart } = useContext( Context )
    
    const result = cartItems.map( item=> (
        <CartItem key={item.id} item={item} />
    ) )
    const size = result.length
    function placeOrder() {
        if ( size > 0 ) {
            setButtonText("Ordering...")
            setTimeout(() => {
                console.log("Order placed!")
                setButtonText("Order Placed Successfully")
                emptyCart()
            }, 3000)
        }
        else {
            setButtonText("Order already Placed")
        }
    }
    
  return (
    <main className="cart-page">
    <h1>Check out</h1>
          {result}
          <hr></hr>
    <p className="total-cost">Total: {size>0 ?(size)*5.99: 0} </p>
    <div className="order-button">
        <button onClick={placeOrder}>{buttonText}</button>
    </div>
</main>
  )
}

export default Cart