import Nav from './nav';
import Hero from './hero';
import Footer from './footer';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className='bg-base-100 w-screen h-screen'>
      <Nav />
      <Hero />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
