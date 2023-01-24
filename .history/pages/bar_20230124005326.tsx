const Bar: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <div className='flex flex-col items-center justify-center h-screen'>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='flex flex-col items-center justify-center flex-1 w-full text-center'>
          <ProductGrid />
        </main>
      </div>

      <FooterComponent />
    </>
  );
};

export default Bar;
