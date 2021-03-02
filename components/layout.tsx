import Head from 'next/head';
import { ReactNode } from 'react';
interface Childrens {
  children: ReactNode;
}
const Layout = ({ children }: Childrens): JSX.Element => {
  return (
    <>
      <Head>
        <title>Franco Garzón</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
