import React, { useState, useEffect, useRef } from 'react';
import Icon from '../Icon/Icon';

interface OptionProps {
  option: {
    label: string,
    modifier: string,
    modalComponent: React.ReactElement,
  }
}

function Option({ option }: OptionProps): React.ReactElement {
  const { label, modifier, modalComponent } = option;
  const [flag, setFlag] = useState(false);

  const popupRef = useRef<HTMLLIElement>(null);

  const changeFlag = (e: Event) => {
    if (!popupRef.current?.contains(e.target as HTMLElement)) {
      setFlag(false);
    }
  };

  useEffect(() => {
    if (flag) {
      document.addEventListener('click', changeFlag);
    }
    return () => document.removeEventListener('click', changeFlag);
  }, [flag]);
  return (
    <li className="option-list__item" ref={popupRef}>
      <button
        className={`option option--${modifier}`}
        type="button"
        onClick={() => setFlag((prev) => !prev)}
      >
        <Icon type={modifier} />
        {label}
      </button>
      {flag && modalComponent}
    </li>
  );
}

export default Option;
