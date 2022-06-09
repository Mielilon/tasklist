import React from 'react';
import ViewLink from '../ViewLink/ViewLink';
import './ViewList.sass';

function ViewList(): React.ReactElement {
  return (
    <ul className="view-list">
      <ViewLink />
      <ViewLink />
      <ViewLink />
      <ViewLink />
      <li className="view-list__item">
        <button type="button" className="view-add-button view-list__view-add-button option">New board</button>
      </li>
    </ul>
  );
}

export default ViewList;
