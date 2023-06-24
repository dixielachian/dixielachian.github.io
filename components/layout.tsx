import Nav from './nav';
import Hero from './hero';
import Footer from './footer';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <Nav />
      <div className='mt-24 relative bg-base-100'>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
