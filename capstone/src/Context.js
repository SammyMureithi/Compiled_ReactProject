import React, { useEffect, useState } from 'react'

const Context =React.createContext()
function ContextProvider( props ) {
    const [allPhotos, setAllphoto] = useState( [] )
    const [cartItems,setCartItems]=useState([])
    useEffect( () => {
        fetch( "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json" )
        .then( res => {
            if ( res.ok ) {
                console.log( "Fetch done okay" )
            }
            else {
                console.log("Fetch not successful")
            }
            return res  
        } )
        .then( res => res.json())
        .then( data => setAllphoto( data ) )
        .catch( error => console.log( error ) )
    }, [] )
    function toggleFavourite( id ) {
        const updatedArray = allPhotos.map( photo => {
            if ( photo.id === id ) {
                console.log(!photo.isFavorite)
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
        return photo
        } )
        setAllphoto(updatedArray)
    }
    function addToCart( newItem ) {
        setCartItems(oldItems => [...oldItems,newItem])
    }
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
     
    function emptyCart() {
        setCartItems([])
    }
    
  return (
      <div>
          <Context.Provider
              value={{ allPhotos: allPhotos, toggle: toggleFavourite, addToCart: addToCart, cartItems, removeFromCart,emptyCart }}>
              {props.children}
          </Context.Provider>
    </div>
  )
}


export  {ContextProvider,Context}