import Image from 'next/image';

import { Button } from '@components/ui/button';

export default function Home() {
  return (
    <div className="max-w-[1440px] mt-20 mx-auto flex items-center gap-32 px-32">
      <div className="max-w-[600px]">
        <h1 className="mb-5 font-semibold text-[80px] leading-[80px]">The road to the <span className="text-orange-primary-color italic">depths</span> of the human soul</h1>
        <p className="font-medium max-w-[460px] mb-10">
          We help you to reveal your potential, overcome challenges and find 
          a guide in your own life with the help of our experienced psychologists.
        </p>
        <Button classes='flex items-center gap-4'>
          Get started
          <Image src="./diagonal-arrow.svg" width={14} height={14} alt="Get started button icon"/>
        </Button>
      </div>
      <div>

      </div>
    </div>
  );
}
