import moment from 'moment'
import React from 'react'

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  return (
    <div className='border rounded-md flex flex-col relative'>
      {/* top */}
      <div className='flex items-center justify-between rounded-t-md px-3 py-4 border-b bg-gray-300 '>
        <div>
          <h1 className='font-bold'>ORDER PLACED</h1>
          <p>{moment.unix(timestamp).format("MM/DD/YYYY")}</p>
        </div>

        <div>
          <h1 className='font-bold'>TOTAL</h1>
          <p>
            ${amount}{" "}
            <span className='text-sm text-gray-600'>
              - Next Day Delivery ${amountShipping}
            </span>
          </p>
        </div>


        <p className='truncate w-72 absolute top-0 right-2 text-gray-500 text-sm'>ORDER # {id}</p>

        <p className='font-bold text-blue-500 text-lg'>
          {items.length} items
        </p>


      </div>


      {/* bottom */}
      <div className='flex p-3 space-x-4 overflow-x-scroll scrollbar-track-gray-300 scrollbar-thumb-slate-400 scrollbar-thin'>
        {images.map(image => (
          <img
            src={image}
            alt=""
            className='object-contain w-32 h-32'
          />
        ))}
      </div>
    </div>
  )
}

export default Order
