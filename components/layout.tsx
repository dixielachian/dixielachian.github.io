import Nav from './nav';
import Footer from './footer';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
