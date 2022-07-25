import React, { FC, useEffect, useRef, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClickOutside: any;
};

// コンポーネントの外側に対するクリックイベントをハンドリングする
const OutsideClickHandler: FC<Props> = ({ children, onClickOutside }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      if (ref.current && !ref.current.contains(event.target)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        onClickOutside();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={ref}>{children}</div>;
};
export default OutsideClickHandler;
