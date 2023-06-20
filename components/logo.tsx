import Glitch from './glitch';

const Logo = () => {
  return (
    <>
      <img className='mr-4 w-10 h-10 rounded' src='https://avatars.githubusercontent.com/u/136664711?v=4' alt='Logo' />
      <span className='self-center text-3xl font-semibold whitespace-nowrap text-white'>
        Dixielachian Futurism
        {/*<Glitch text='Dixielachian Futurism' />*/}
      </span>
    </>
  );
};

export default Logo;
