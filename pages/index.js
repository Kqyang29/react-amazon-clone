import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'

const Home = ({ products }) => {
  // console.log(products)
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto '>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  )
}

export default Home;


export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json());

  return {
    props: {
      products: products,
      session: session,
    }
  }
}
