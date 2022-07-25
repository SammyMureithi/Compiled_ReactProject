import React from 'react'

function Product( props ) {
    const image = `../images/` + props.image
    const [favaourite, setFavourit] = React.useState( false )
    const [cart,setCart]=React.useState(false)
   
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        width: '250px',
        height: '250px'
    }
    function addToFavourite(){
        setFavourit(prevState => !prevState)
    }
    function addToCart() {
        setCart(prevState => !prevState)
    }
  return (
      <div id='product' >
          <div style={styles}>
              <img src={favaourite?'../images/h2.png':'../images/h1.png'} onClick={addToFavourite}/>
              <img src={cart?'../images/cart.png':'../images/cart2.png'} onClick={addToCart}/>
          </div>
         
    </div>
  )
}

export default Product