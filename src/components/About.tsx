'use client';

import { type IParallax, ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import type { RefObject } from 'react';

const About = ({ ref }: { ref: RefObject<IParallax> }) => {
  return (
    <ParallaxLayer
      offset={1}
      speed={0.2}
      className="container p-6 flex gap-6 lg:gap-10 bg-blue-100"
      onClick={() => ref.current?.scrollTo(2)}
    >
      <div className="space-y-1">
        <h1 className="text-3xl font-medium">Giới thiệu</h1>

        <p>
          Được làm bởi Động Yuri. Với mục tiêu tạo ra nơi đăng truyện mới cho
          dịch giả và nơi đọc mới cho dịch giả.
        </p>
      </div>

      <div className="relative aspect-square">
        <Image
          unoptimized
          fill
          sizes="(max-width: 640px) 50vw, 75vw"
          src={'/static/icon.png'}
          alt="Moetruyen Icon"
          className="rounded-md"
        />
      </div>
    </ParallaxLayer>
  );
};

export default About;
