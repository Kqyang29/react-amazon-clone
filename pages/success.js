import Header from '../components/Header'
import { useRouter } from "next/router";
import { CheckCircleIcon } from '../icons';

function Success() {
  const router = useRouter();

  return (
    <div>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-xl lg:text-3xl">
              Thank you, Your order has been confirmed!
            </h1>
          </div>

          <p>
            Thank you for shopping with us. We'll send a confirmation order
            items has shipped, if you would like to check tha status of order(s)
            please press the link below
          </p>

          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to orders
          </button>
        </div>
      </main>
    </div>
  )
}

export default Success
