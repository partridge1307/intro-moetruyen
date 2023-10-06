'use client';

import { ParallaxLayer } from '@react-spring/parallax';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Social = () => {
  return (
    <ParallaxLayer
      offset={3}
      speed={0.3}
      className="container p-6 flex flex-col justify-between gap-14 bg-blue-100"
    >
      <h1 className="text-3xl font-medium">Cộng đồng</h1>

      <div className="relative flex gap-10 justify-between min-h-0">
        <p className="absolute top-0 left-0 text-lg lg:text-xl">Facebook</p>

        <a
          target="_blank"
          href="https://www.facebook.com/Bfangteam"
          className="flex items-center gap-1 text-2xl lg:text-4xl"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>Check</span>
        </a>

        <div className="relative aspect-square w-5/6">
          <Image
            unoptimized
            fill
            sizes="(max-width: 640px) 50vw, 70vw"
            src="/static/fb.jpg"
            alt="Facebook Image"
            className="object-contain object-right bg-gradient-to-l from-white"
          />
        </div>
      </div>

      <div className="relative flex gap-10 justify-between min-h-0">
        <div className="relative w-5/6" style={{ aspectRatio: 4 / 3 }}>
          <Image
            unoptimized
            fill
            sizes="(max-width: 640px) 50vw, 70vw"
            src="/static/disc.jpg"
            alt="Discord Image"
            className="object-contain rounded-md object-left bg-gradient-to-r from-white"
          />
        </div>

        <a
          target="_blank"
          href="https://discord.com/invite/pf26Duy"
          className="flex items-center gap-1 text-2xl lg:text-4xl"
        >
          <span>Check</span>
          <ArrowRight className="w-6 h-6" />
        </a>

        <p className="absolute top-0 right-0 text-lg lg:text-xl">Discord</p>
      </div>
    </ParallaxLayer>
  );
};

export default Social;
