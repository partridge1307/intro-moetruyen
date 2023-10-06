'use client';

import { ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import QR_CODE from '../../public/QR_CODE.png';

const Donate = () => {
  return (
    <ParallaxLayer
      offset={5}
      className="flex flex-col gap-4 justify-center items-center"
    >
      <p className="text-2xl mb-2">Donate</p>

      <Image src={QR_CODE} alt="QR Code" />

      <p>TP Bank | 03566651501 | PHAN THE HIEN</p>
    </ParallaxLayer>
  );
};

export default Donate;
