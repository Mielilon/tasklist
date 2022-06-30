import React from 'react';
import './Tooltip.sass';

interface TooltipProps {
  children: React.ReactNode
  value: string
  position?: string
}

function Tooltip({ children, value, position }: TooltipProps): React.ReactElement {
  return (
    <div className={`tooltip tooltip--${position}`} data-tooltip={value}>
      {children}
    </div>
  );
}
Tooltip.defaultProps = {
  position: 'top',
};

export default Tooltip;
