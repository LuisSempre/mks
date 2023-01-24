import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ProductGrid from "../components/ProductsGrid";
import FooterComponent from "../components/FooterComponent";

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center flex-1 w-full h-full px-20 mx-auto text-center'>
        <ProductGrid />
      </main>

      <FooterComponent />
    </div>
  );
};

export default Home;
