import { Fragment } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ title, keywords, description, children }: any) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>
      <Header />
      <Fragment>{children}</Fragment>
      <Footer />
    </div>
  );
};

export default Layout;
