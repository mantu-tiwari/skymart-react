import React, { useContext } from 'react'
import { MyShop } from '../context/MyContext'
import ShopHeader from '../components/ShopHeader'
import ProductCard from '../components/ProductCard'

const Shop = () => {

  const {setPageToggle, product} = useContext(MyShop)
  console.log(product);

  return (
    <div className="min-h-screen bg-[#090909] text-white" >
      <ShopHeader/>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4' >
        {product.map((e) => {
            return <ProductCard key={e.id} product={e} />
        })}
      </div>
    </div>
  )
}

export default Shop
