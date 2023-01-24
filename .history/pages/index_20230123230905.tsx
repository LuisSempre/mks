import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ProductGrid from "../components/ProductsGrid";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

const Home: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='flex flex-col items-center justify-center flex-1 w-full px-20 text-center'>
          <ProductGrid />
        </main>
      </div>

      <FooterComponent />
    </>
  );
};

export default Home;
