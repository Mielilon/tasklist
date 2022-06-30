import React from 'react';

interface IconProps {
  type: string
}
function Icon({ type }: IconProps): React.ReactElement {
  const Svg = require(`./assets/${type}.svg`).default;

  return (
    <Svg />
  );
}

export default Icon;
