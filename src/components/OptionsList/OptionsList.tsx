import React from 'react';
import Option from '../Option/Option';
import './OptionsList.sass';
import FilterPopup from '../Popups/FilterPopup/FilterPopup';
import SortingPopup from '../Popups/SortingPopup/SortingPopup';
import GroupingPopup from '../Popups/GroupingPopup/GroupingPopup';

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
      modalComponent: <SortingPopup />,
    },
    {
      label: 'Group by',
      modifier: 'grouping',
      modalComponent: <GroupingPopup />,
    },
    {
      label: 'Show',
      modifier: 'show',
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
