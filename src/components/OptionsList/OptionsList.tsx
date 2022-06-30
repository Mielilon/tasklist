import React from 'react';
import Option from '../Option/Option';
import './OptionsList.sass';
import FilterPopup from '../Popups/FilterPopup/FilterPopup';

function OptionsList(): React.ReactElement {
  const options = [
    {
      label: 'Filter',
      modifier: 'filter',
      modalComponent: <FilterPopup />,
    },
    {
      label: 'Sorting',
      modifier: 'sorting',
      modalComponent: <FilterPopup />,
    },
    {
      label: 'Group by',
      modifier: 'grouping',
      modalComponent: <FilterPopup />,
    },
    {
      label: 'Show',
      modifier: 'show',
      modalComponent: <FilterPopup />,
    },
    {
      label: '',
      modifier: 'settings',
      modalComponent: <FilterPopup />,
    },
  ];
  return (
    <ul className="options-list">

      {options.map((option) => <Option option={option} key={option.label} />)}
    </ul>
  );
}

export default OptionsList;
