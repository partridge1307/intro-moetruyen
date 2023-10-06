'use client';

import About from '@/components/About';
import Donate from '@/components/Donate';
import Features from '@/components/Features';
import Homepage from '@/components/Homepage';
import Loading from '@/components/Loading';
import Social from '@/components/Social';
import Time from '@/components/Time';
import { type IParallax, Parallax } from '@react-spring/parallax';
import { useRef, useState } from 'react';

const Page = () => {
  const [isMounted, setMonted] = useState(false);
  const ref = useRef<IParallax>(null);

  return (
    <main>
      <Loading isMounted={isMounted} setMonted={setMonted} />

      {isMounted && (
        <Parallax pages={6} ref={ref}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/static/blue.svg")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />

          <Homepage ref={ref} />
          <About ref={ref} />
          <Features ref={ref} />
          <Social ref={ref} />
          <Time ref={ref} />
          <Donate />
        </Parallax>
      )}
    </main>
  );
};

export default Page;
