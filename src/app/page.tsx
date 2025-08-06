import Image from 'next/image';

import Checkmark from '@public/icons/checkmark.svg';
import DiagonalArrow from '@public/icons/diagonal-arrow.svg';
import Users from '@public/icons/users.svg';
import Question from '@public/icons/question.svg';
import { Button } from '@components/ui/button';

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mt-20 mx-auto flex items-center gap-32 px-32">
        <div className="max-w-[600px]">
          <h1 className="mb-5 font-semibold text-[80px] leading-[80px]">The road to the <span className="text-orange-primary-color italic">depths</span> of the human soul</h1>
          <p className="font-medium max-w-[460px] mb-10">
            We help you to reveal your potential, overcome challenges and find 
            a guide in your own life with the help of our experienced psychologists.
          </p>
          <Button classes='flex items-center gap-4'>
            Get started
            <DiagonalArrow />
          </Button>
        </div>
        <div className='relative'>
          <ul>
            <li className='absolute w-12 h-12 bg-yellow-primary-color rounded-[10px] -right-7 top-10 flex items-center justify-center rotate-[15deg]'>
              <Users />
            </li>
            <li className='absolute w-12 h-12 bg-green-primary-color rounded-[10px] -left-7 top-52 flex items-center justify-center -rotate-[15deg]'>
              <Question />
            </li>
            <li className='absolute bg-orange-primary-color rounded-[20px] -left-28 bottom-20 flex items-center gap-4 p-8'>
              <div className='w-12 h-12 bg-white-primary-color rounded-xl flex items-center justify-center'>
                <Checkmark className="text-orange-primary-color" />
              </div>
              <div className='flex flex-col gap-2 text-white-primary-color'>
                <p className='opacity-50 text-sm'>Experienced psychologists</p>
                <span className='font-bold text-2xl'>15,000</span>
              </div>
            </li>
          </ul>
          <Image
            src="/images/hero.png"
            width={464}
            height={524}
            alt="Hero image"
            className='max-w-[464px] max-h-[524px] object-cover'
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] rounded-full blur-[50vw] opacity-40 bg-orange-primary-color pointer-events-none"></div>
    </>
  );
}
