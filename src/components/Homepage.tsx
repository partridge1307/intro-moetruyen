'use client';

import { ParallaxLayer } from '@react-spring/parallax';
import { TypeAnimation } from 'react-type-animation';
import style from '@/styles/homepage.module.css';
import { MoveDown } from 'lucide-react';

const Homepage = () => {
  return (
    <ParallaxLayer offset={0} speed={1} className={style.text}>
      <div />

      <div className="text-center">
        <h1 className="text-4xl lg:text-5xl font-semibold">
          <span className="text-orange-500">M</span>OETRUYEN
        </h1>

        <TypeAnimation
          sequence={[
            'Powered by Yuri',
            1000,
            'Truyện tranh',
            1000,
            'Forum',
            1000,
            'Next generation',
            1000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <div className="flex flex-col gap-5 items-center text-xl lg:text-2xl">
        <p>Cuộn</p>
        <MoveDown className="animate-bounce w-10 h-10" />
      </div>
    </ParallaxLayer>
  );
};

export default Homepage;
