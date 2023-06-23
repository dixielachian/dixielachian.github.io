import { useState } from 'react';
import Link from 'next/link';

import Logo from './logo';

const Nav = () => {
  const [ show, setShow ] = useState(false);

  return (
    <nav className='bg-base-100 border-gray-700 bg-opacity-75 fixed top-0 z-50 w-screen h-24'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' passHref>
          <a className='flex items-center'>
            <Logo />
          </a>
        </Link>

        <button className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600' onClick={() => setShow(!show)}>
          <span className='sr-only'>Open main menu</span>
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
            <path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'></path>
          </svg>
        </button>

        {show && (
          <div className='w-full'>
            <ul className='flex flex-col font-medium mt-4 rounded-lg bg-indigo-800 border-gray-700'>
              {[
                { href: '/', name: 'Home' },
                { href: '/about', name: 'About' },
                { href: '/links', name: 'Links' }
              ].map(({ href, name }) => (
                <li key={name}>
                  <Link href={href} passHref>
                    <a className='block py-2 pl-3 pr-4 text-gray-900 rounded text-gray-400 hover:bg-indigo-700 hover:text-white'>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
