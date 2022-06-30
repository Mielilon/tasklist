import React from 'react';
import './AddButton.sass';
import Icon from '../Icon/Icon';

interface AddButtonProps {
  children?: React.ReactNode
  type: string
  extraClass?: string
}
function AddButton({ children, type, extraClass }: AddButtonProps): React.ReactElement {
  return (
    <div className={`add-button-wrapper add-button-wrapper--${type}`}>
      <button className={`add-button ${extraClass}`} type="button">
        <Icon type="plus" />
        {children}
      </button>
    </div>
  );
}

AddButton.defaultProps = {
  children: '',
  extraClass: '',
};

export default AddButton;
