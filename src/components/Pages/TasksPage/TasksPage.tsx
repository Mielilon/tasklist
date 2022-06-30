import React from 'react';
import TasksBoard from '../../TasksBoard/TasksBoard';
import Header from '../../Header/Header';
import './TasksPage.sass';
import '../Page.sass';

function TasksPage(): React.ReactElement {
  return (
    <div className="page page--gray page--tasks">
      <Header />
      <TasksBoard />
    </div>
  );
}

export default TasksPage;
