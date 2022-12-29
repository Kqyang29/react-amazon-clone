import Image from 'next/image'
import React from 'react'
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from 'react-redux';
import { selectItems } from '../slice/basketSlice';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';

function Header() {
  const { data: session, status } = useSession();
  // console.log(session)
  const products = useSelector(selectItems);
  const router = useRouter();
  return (
    <header>
      {/* top */}
      <div className='p-2 bg-amazon_blue flex items-center justify-between'>
        {/* left */}
        <div className='mt-2 flex items-center'>
          <Image
            onClick={() => router.push('/')}
            src="https://links.papareact.com/f90"
            alt='logo'
            height={40}
            width={150}
            style={{ objectFit: "contain" }}
            className="cursor-pointer p-4"
          />
        </div>

        {/* middle */}
        <div className='hidden sm:flex items-center py-2 h-10 rounded-md flex-grow bg-yellow-400 max-w-xl'>
          <input
            type="text"
            placeholder='search'
            className='rounded-l-md  outline-none w-full px-4 py-2'
          />
          <MagnifyingGlassIcon className='h-12 p-3 text-white cursor-pointer' />
        </div>

        {/* right */}
        <div className='text-white flex items-center text-xs space-x-10 mx-6 whitespace-nowrap mr-10'>
          <div
            className='link'
            onClick={() => (session ? signOut() : signIn())}
          >
            <p>{session ? `Hello ${session?.user?.name}` : "Sign In"}</p>
            <p className='font-semibold md:text-md'>Account & List</p>
          </div>

          <div className='link'>
            <p>Returns</p>
            <p className='font-semibold md:text-md'>& Orders</p>
          </div>

          <div onClick={() => router.push('/checkout')} className='link flex items-center relative'>
            <span className='absolute top-0 bg-yellow-400 rounded-full h-4 w-4 text-center '>
              {products.length}
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline mt-2 font-semibold '>Basket</p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className='flex items-center bg-amazon_blue-light text-white p-2 space-x-2'>
        <p className="link ml-5 flex items-center">
          <Bars3Icon className='h-6 mr-1 cursor-pointer' />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today Deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header
