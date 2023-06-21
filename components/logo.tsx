import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <Image className='rounded-2xl' width={90} height={90} src='/img/avatar.jpeg' alt='Logo' />
      <span className='ml-6 self-center text-3xl font-semibold whitespace-nowrap text-white'>
        Dixielachian Futurism
      </span>
    </>
  );
};

export default Logo;
