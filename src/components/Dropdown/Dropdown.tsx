import React from 'react';
import Icon from '../Icon/Icon';
import './Dropdown.sass';

interface IDropdownItem {
  name: string,
  icon?: {
    type: string,
    color: string
  },
}

interface IDropdown {
  data: {
    defaultValue: IDropdownItem,
    dropdownItems: IDropdownItem[]
  },
  type: string
}

function Dropdown({
  data, type, value, onChange, name,
}): React.ReactElement {
  const { dropdownItems } = data;

  return (
    <details className={`dropdown dropdown--${type}`}>
      <summary className="dropdown__value">{value}</summary>
      <ul className="dropdown-list popup">
        {dropdownItems.map((item) => (
          <li
            className="dropdown-item"
            key={item.name}
            onClick={() => {
              onChange({ target: { value: item.name, name } });
            }}
          >
            {item.icon && (
            <span className="dropdown-item__icon" style={{ color: item.icon.color }}>
              <Icon type={item.icon.type} />
            </span>
            )}
            {item.name}
          </li>
        ))}
      </ul>
    </details>
  );
}

export default Dropdown;
