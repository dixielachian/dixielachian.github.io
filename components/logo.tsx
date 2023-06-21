import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <Image className='rounded-2xl' width={90} height={90} src='/img/avatar.jpeg' alt='Logo' />
      <h1 className='ml-6 self-center text-3xl font-semibold whitespace-nowrap text-white'>
        Dixielachian Futurism
      </h1>
    </>
  );
};

export default Logo;
