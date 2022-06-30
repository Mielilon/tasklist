import React from 'react';
import Popup from '../Popup/Popup';
import './FilterPopup.sass';

function FilterPopup(): React.ReactElement {
  return (
    <Popup title="Некий заголовок">
      <p>
        Lorem, ipsum dolor sit
        amet consectetur adipisicing elit.
        Molestiae doloribus quae magnam quos animi,
        nisi ipsum dolor minima, temporibus, ipsam
        enim itaque. Exercitationem dolore nemo
        enim pariatur ea nisi temporibus!
      </p>
    </Popup>
  );
}

export default FilterPopup;
