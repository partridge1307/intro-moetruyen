'use client';

import { IParallax, ParallaxLayer } from '@react-spring/parallax';
import type { FC, RefObject } from 'react';
import style from '@/styles/feature.module.css';

interface FeaturesProps {
  ref: RefObject<IParallax>;
}

const Features: FC<FeaturesProps> = ({ ref }) => {
  return (
    <ParallaxLayer
      offset={2}
      speed={0.4}
      className="container p-6 flex flex-col justify-between bg-blue-100"
      onClick={() => ref.current?.scrollTo(3)}
    >
      <div className="flex justify-between">
        <div />

        <div className="space-y-5 lg:space-y-10">
          <h1 className="text-3xl font-medium">Điểm nhấn</h1>

          <ul className="lg:-translate-x-[55%] space-y-4 text-lg text-end">
            <li>Nhiều kiểu đọc</li>
            <li>Giao diện hiện đại</li>
            <li>Forum tự do đăng tải</li>
            <li>Dễ dàng trong mọi thứ</li>
            <li>Theo dõi thứ bạn muốn</li>
            <li>Hỗ trợ xây dựng cộng đồng</li>
          </ul>
        </div>
      </div>

      <p className={`text-9xl font-semibold text-transparent ${style.stroke}`}>
        MOETRUYEN
        <span aria-hidden="true">MOETRUYEN</span>
      </p>
    </ParallaxLayer>
  );
};

export default Features;
