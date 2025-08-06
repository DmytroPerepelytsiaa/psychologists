import Link from 'next/link';

import { Button } from '@components/ui/button';
import { ButtonAppearance } from '@types/ui.type';

export const Header = () => {
  return (
    <>
      <header className="h-24 py-6 px-6 flex items-center max-w-[1440px] mx-auto gap-10 justify-between">
        <div className='flex items-center gap-2 justify-between max-w-[720px] w-full'>
          <Link href="/" className="font-bold">
            <span className='text-orange-primary-color'>psychologists.</span>
            services
          </Link>
          <nav className='flex items-center gap-10'>
            <Link href="/">Home</Link>
            <Link href="/psychologists">Psychologists</Link>
          </nav>
        </div>
        <div className='flex items-center gap-2'>
          <Button appearance={ButtonAppearance.Secondary}>Log In</Button>
          <Button>Registration</Button>
        </div>
      </header>
      <hr className='border-black-primary-color opacity-10' />
    </>
  );
};