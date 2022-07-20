import React, { FC } from 'react';

type SpacerProps = {
  size: number;
  horizontal?: boolean;
};

const Spacer: FC<SpacerProps> = ({ size, horizontal }) => (
  <div
    style={
      horizontal
        ? {
            width: size,
            height: 'auto',
            display: 'inline-block',
            flexShrink: 0,
          }
        : { width: 'auto', height: size, flexShrink: 0 }
    }
  />
);

Spacer.defaultProps = {
  horizontal: false,
};
export default Spacer;
