import Image from 'next/image'
import getProducts, { ProductsParams } from '../actions/getProducts'

interface HomeProps {
  searchParams : ProductsParams
}

export default async function Home({searchParams} : HomeProps) {

  const products = await getProducts(searchParams);

  console.log(products);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
