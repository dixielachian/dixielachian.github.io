import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const aborReg = localFont({
  src: './Abor-DemoVersion-Regular.otf',
  variable: '--font-abor'
});

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});
