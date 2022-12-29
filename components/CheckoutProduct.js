import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { StarIcon } from '../icons'
import { addToBasket, removeFromBasket } from '../slice/basketSlice'

function CheckoutProduct({ id, title, price, description, category, image, rating, hasPrime }) {
  const dispatch = useDispatch()
  const addItemToBasket = () => {


    dispatch(addToBasket(product));
  }

  const removeItemFromBasket = () => {


    dispatch(removeFromBasket({ id }));
  }
  return (
    <div className='grid grid-cols-5 p-2 mb-4 shadow-sm'>
      <Image
        src={image}
        alt="checkoutProduct_img"
        width={250}
        height={250}
        style={{ objectFit: "contain" }}
        className="my-auto"
      />

      <div className='col-span-3 m-5 space-y-2'>
        <p className='text-lg'>{title}</p>

        <div className='flex my-2'>
          {Array(rating).fill().map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500' />
          ))}
        </div>

        <p className='text-sm line-clamp-3'>{description}</p>

        <p>${price}</p>

        {hasPrime && (
          <div className='flex items-center space-x-1 '>
            <img
              src="https://links.papareact.com/fdw"
              alt="has_prime"
              className='w-12'
            />
            <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className='flex flex-col space-y-2 my-auto justify-end'>
        <button className='button' onClick={addItemToBasket}>Add to Basket</button>
        <button className='button' onClick={removeItemFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
