import React from 'react';
import Card from '../Card/Card';
import './GroupHeader.sass';
import AddButton from '../AddButton/AddButton';
import Tooltip from '../Tooltip/Tooltip';

function GroupHeader(): React.ReactElement {
  return (
    <Card type="header">
      <div className="card__group-name">To do</div>
      <div className="card__tasks-number">4</div>
      <Tooltip value="Settings">
        <button className="option card__option" type="button">
          <span className="option__ellipsis" />
        </button>
      </Tooltip>
      <Tooltip value="Add Task">
        <AddButton type="task-icon" />
      </Tooltip>
    </Card>
  );
}

export default GroupHeader;
