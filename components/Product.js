import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StarIcon } from '../icons';
import { addToBasket } from '../slice/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id, title, price, description, image, rating, hasPrime
    };

    dispatch(addToBasket(product));
  }
  return (
    <div className='flex flex-col items-start justify-between relative bg-white m-2 p-10 z-30 space-y-2'>
      <p className='absolute top-2 right-2 text-gray-400'>{category}
      </p>

      <img
        src={image}
        alt=""
        className='w-full h-40 object-contain'
      />

      <h1>{title}</h1>

      <div className='flex'>
        {Array(rating).fill().map((_, i) => (
          <StarIcon className='h-7 text-yellow-400' />

        ))}
      </div>

      <div >
        <p>${price}</p>
      </div>

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

      <button
        onClick={addItemToBasket}
        className='p-2  w-full rounded-md bg-gradient-to-t from-yellow-300 to-yellow-500 active:from-yellow-200'>
        Add to Basket
      </button>
    </div>
  )
}

export default Product
