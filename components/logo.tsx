import Image from 'next/image';
import avatar from '../public/img/avatar.jpeg';

const Logo = () => {
  return (
    <>
      <Image className='rounded-2xl' width={90} height={90} src={avatar} alt='Logo' />
      <h1 className='ml-6 self-center text-3xl font-semibold whitespace-nowrap text-white'>
        Cavalier Futurism
      </h1>
    </>
  );
};

export default Logo;
