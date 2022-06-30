import React from 'react';
import AddButton from '../AddButton/AddButton';
import GroupHeader from '../GroupHeader/GroupHeader';
import Task from '../Task/Task';
import './TasksGroup.sass';

function TasksGroup(): React.ReactElement {
  return (
    <div className="tasks-group">
      <GroupHeader />
      <div className="tasks-wrapper">
        <Task />
        <Task />
        <AddButton type="task">New Task</AddButton>
      </div>
    </div>
  );
}

export default TasksGroup;
