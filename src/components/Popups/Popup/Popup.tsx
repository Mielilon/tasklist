import React from 'react';
import './Popup.sass';

interface PopupProps {
  children: React.ReactNode;
  title?: string
}

function Popup({ children, title }: PopupProps): React.ReactElement {
  return (
    <div className="popup">
      <div className="popup__content">
        {title ? <div className="popup__title">{title}</div> : ''}
        {children}
      </div>
    </div>
  );
}

Popup.defaultProps = {
  title: false,
};

export default Popup;
