'use client';

import { IParallax, ParallaxLayer } from '@react-spring/parallax';
import Countdown from 'react-countdown';
import ShareButton from './ShareButton';
import type { RefObject } from 'react';

const Time = ({ ref }: { ref: RefObject<IParallax> }) => {
  return (
    <ParallaxLayer
      offset={4}
      speed={0.5}
      className="flex flex-col justify-center items-center gap-10 bg-white"
      onClick={() => ref.current?.scrollTo(5)}
    >
      <Countdown
        date={new Date('October 22, 2023 12:00:00')}
        precision={3}
        renderer={({ days, hours, minutes, seconds }) => (
          <p className="text-4xl text-center">
            Còn{' '}
            <span>
              {days} ngày <span>{hours} giờ</span> <span>{minutes} phút</span>{' '}
              <span>{seconds} giây</span>
            </span>
          </p>
        )}
      />

      <ShareButton title="Moetruyen" />
    </ParallaxLayer>
  );
};

export default Time;
