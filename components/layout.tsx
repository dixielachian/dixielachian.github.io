import { Fragment } from 'react';

import Nav from './nav';
import Hero from './hero';
import Footer from './footer';

const Layout = ({ children }: { children: Fragment }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
