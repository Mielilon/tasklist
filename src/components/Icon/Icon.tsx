import React from 'react';

interface IIcon {
  type: string,
  size?: number
}
function Icon({ type, size }: IIcon): React.ReactElement {
  const Svg = require(`./assets/${type}.svg`).default;

  const attributes: any = {};

  if (size) {
    attributes.width = size;
    attributes.height = size;
  }

  return (
    <Svg
      {...attributes}
    />
  );
}
Icon.defaultProps = {
  size: '',
};

export default Icon;
