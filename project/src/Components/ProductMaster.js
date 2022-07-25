import React from 'react'
import Data from "./Data"
import Product from './Product'

function ProductMaster() {
    const Result = Data.map( element => {
        return ( <Product name={element.title} image={element.image} key={element.image}/>)
    
})
  return (
      <div id="master">
          {Result}
    </div>
  )
}

export default ProductMaster