import React from 'react';
import Icon from '../../Icon/Icon';
import Filter from '../../Filter/Filter';
import Popup from '../Popup/Popup';
import './FilterPopup.sass';

function FilterPopup(): React.ReactElement {
  return (
    <Popup title="Filters">
      <Filter />
      <div className="filters-control flex flex--justify-between">
        <button className="option" type="button">
          <Icon type="plus" size={10} />
          Add
        </button>
        <button className="option" type="button">
          <Icon type="close" size={9} />
          Clear all
        </button>
      </div>
    </Popup>
  );
}

export default FilterPopup;
