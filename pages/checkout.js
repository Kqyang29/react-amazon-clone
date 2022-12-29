import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slice/basketSlice';

function Checkout() {
  const { data: session } = useSession();
  const products = useSelector(selectItems);
  const total = useSelector(selectTotal);
  return (
    <div className="bg-gray-100">
      <Header />

      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* left */}
        <div className='m-5'>
          <div className='shadow-sm bg-white'>
            <Image
              src="https://links.papareact.com/ikj"
              alt="checkout_image"
              width={1020}
              height={250}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className='flex flex-col p-5 bg-white'>
            <h1 className='text-3xl font-semibold border-b pb-4'>
              {products.length === 0 ? "Your Amazon Basket is empty" : "Your Shopping Basket"}
            </h1>

            {products.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div className='bg-white m-5 whitespace-nowrap'>
          <h2 className='p-5 text-xl'>
            subtotal ({products.length}) items: ${total}
          </h2>

          <div className='px-5 pb-2'>
            <button className={`button mt-2 w-full ${!session && `from-gray-300 to-gray-500 cursor-not-allowed border-gray-300`}`}>
              {session ? "Sign in to Checkout" : "Click to CheckOut"}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Checkout
