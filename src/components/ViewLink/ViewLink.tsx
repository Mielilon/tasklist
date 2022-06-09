import React from 'react';
import './ViewLink.sass';

function ViewLink(): React.ReactElement {
  return (
    <li className="view-list__item">
      <a href="v" data-view-status-color="blue-color" className="view-link">List View</a>
    </li>
  );
}

export default ViewLink;
