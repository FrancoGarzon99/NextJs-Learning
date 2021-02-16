import Head from 'next/head';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create new Portfolio</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
