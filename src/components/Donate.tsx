'use client';

import { ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';

const Donate = () => {
  return (
    <ParallaxLayer
      offset={5}
      className="flex flex-col gap-4 justify-center items-center"
    >
      <p className="text-2xl mb-2">Donate</p>

      <Image
        unoptimized
        width={294}
        height={294}
        src="/static/QR_CODE.png"
        alt="QR Code"
      />

      <p>TP Bank | 03566651501 | PHAN THE HIEN</p>
    </ParallaxLayer>
  );
};

export default Donate;
