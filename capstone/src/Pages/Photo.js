import React, { useContext } from 'react'
import Image from '../Components/Image'
import { Context } from '../Context'
import getClass from '../utils/index'

function Photo( ) {
    const {allPhotos}=useContext(Context)
    const result = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
   
  return (
    <main className="photos">
    {result}
</main>
  )
}

export default Photo