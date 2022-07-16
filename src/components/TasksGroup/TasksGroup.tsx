import React from 'react';
import TaskEdit from '../TaskEdit/TaskEdit';
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
        <TaskEdit />
        <AddButton type="task">New Task</AddButton>
      </div>
    </div>
  );
}

export default TasksGroup;
