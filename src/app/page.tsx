'use client';

import About from '@/components/About';
import Donate from '@/components/Donate';
import Features from '@/components/Features';
import Homepage from '@/components/Homepage';
import Loading from '@/components/Loading';
import Social from '@/components/Social';
import Time from '@/components/Time';
import { Parallax } from '@react-spring/parallax';
import { useState } from 'react';

const Page = () => {
  const [isMounted, setMonted] = useState(false);

  return (
    <main>
      <Loading isMounted={isMounted} setMonted={setMonted} />

      {isMounted && (
        <Parallax pages={6}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/blue.svg")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />

          <Homepage />
          <About />
          <Features />
          <Social />
          <Time />
          <Donate />
        </Parallax>
      )}
    </main>
  );
};

export default Page;
