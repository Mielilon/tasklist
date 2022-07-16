import React from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
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
  const [popupRef, changeVisibility, isVisible] = useOutsideClick();

  return (
    <li className="option-list__item" ref={popupRef}>
      <button
        className={`option option--${modifier}`}
        type="button"
        onClick={changeVisibility}
      >
        <Icon type={modifier} />
        {label}
      </button>
      {isVisible && modalComponent}
    </li>
  );
}

export default Option;
