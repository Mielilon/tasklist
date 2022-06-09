import React from 'react';
import Header from '../../Header/Header';
import './TasksPage.sass';

function TasksPage(): React.ReactElement {
  return (
    <div className="page page--gray page--tasks">
      <Header />
    </div>
  );
}

export default TasksPage;
