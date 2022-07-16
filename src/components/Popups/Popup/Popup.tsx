import React, { useCallback, useMemo, useState } from 'react';
import './Popup.sass';

interface PopupProps {
  children: React.ReactNode
  title?: string
  titleSize?: string
}

function Popup({ children, title, titleSize }: PopupProps): React.ReactElement {
  const [right, setRight] = useState(0);
  const popupRef = useCallback((popup) => {
    if (!popup) return;
    setRight(popup.getBoundingClientRect().right);
  }, []);
  const windowWidth = window.screen.width;

  const ff = () => {
    if (right > windowWidth) return 20;
    return '';
  };

  return (
    <form className="popup" ref={popupRef} style={{ right: ff() }}>
      <div className="popup__content">
        {title ? (
          <div className={`popup__title popup__title--${titleSize}`}>
            {title}
          </div>
        ) : ''}
        {children}
      </div>
    </form>
  );
}

Popup.defaultProps = {
  title: false,
  titleSize: '',
};

export default Popup;
