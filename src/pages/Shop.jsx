import React, { useContext } from 'react'
import { MyShop } from '../context/MyContext'

const Shop = () => {

  const {setPageToggle} = useContext(MyShop)

  return (
    <div>
      <h1>THis is Shop</h1>
      <button onClick={() => {
          setPageToggle(true)
      }} >Back</button>
    </div>
  )
}

export default Shop
