import { Fragment } from 'react';

import Nav from './nav';
import Hero from './hero';
import Footer from './footer';

const Layout = ({ children }: { children: Fragment }) => {
  return (
    <>
      <Nav />
      <div className='mt-24 relative'>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
