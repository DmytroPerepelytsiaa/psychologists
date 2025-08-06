import Link from 'next/link';

import { ButtonAppearance } from '@types/ui.type';

import { Button } from './ui/button';

export const Header = () => {
  return (
    <>
      <header className="h-24 py-6 px-6 flex items-center max-w-[1440px] mx-auto gap-10 justify-between">
        <div className='flex items-center gap-2 justify-between'>
          <Link href="/" className="font-bold">
            <span className='text-orange-primary-color'>psychologists.</span>
            services
          </Link>
          <nav></nav>
        </div>
        <div className='flex items-center gap-2'>
          <Button appearance={ButtonAppearance.Secondary}>Log In</Button>
          <Button>Registration</Button>
        </div>
      </header>
      <hr className='border-black-primary-color opacity-10'></hr>
    </>
  );
};