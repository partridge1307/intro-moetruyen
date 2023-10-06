'use client';

import type { Dispatch, FC, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import Wave from './Wave';

interface LoadingProps {
  isMounted: boolean;
  setMonted: Dispatch<SetStateAction<boolean>>;
}

const Loading: FC<LoadingProps> = ({ isMounted, setMonted }) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimation(true), 1000 * 0.5);
  }, []);

  useEffect(() => {
    if (animation) {
      setTimeout(() => setMonted(true), 1000 * 2);
    }
  }, [animation, setMonted]);

  return (
    !isMounted && (
      <div
        className={`absolute inset-0 z-[9999] bg-blue-500 wave-box${
          animation ? ' run' : ''
        }`}
      >
        <Wave />
      </div>
    )
  );
};

export default Loading;
