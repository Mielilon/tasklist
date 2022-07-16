import React from 'react';
import Popup from '../Popup/Popup';
import Icon from '../../Icon/Icon';
import './GroupingPopup.sass';

function GroupingPopup(): React.ReactElement {
  return (
    <Popup title="Group by:" titleSize="little">
      <ul className="dropdown-list dropdown-list--full-popup">
        <li className="dropdown-item active">
          <span className="dropdown-item__icon"><Icon type="status" /></span>
          Status
        </li>
        <li className="dropdown-item">
          <span className="dropdown-item__icon"><Icon type="assignee" /></span>
          Assignee
        </li>
        <li className="dropdown-item">
          <span className="dropdown-item__icon"><Icon type="transparent-flag" /></span>
          Priority
        </li>
        <li className="dropdown-item">
          <span className="dropdown-item__icon"><Icon type="tags" /></span>
          Tags
        </li>
        <li className="dropdown-item">
          <span className="dropdown-item__icon"><Icon type="calendar" /></span>
          Due date
        </li>
        <li className="dropdown-item">
          <span className="dropdown-item__icon"><Icon type="none" /></span>
          None
        </li>
      </ul>
    </Popup>
  );
}

export default GroupingPopup;
