import React from 'react';
import TasksGroup from '../TasksGroup/TasksGroup';
import Container from '../Container/Container';
import './TasksBoard.sass';
import AddButton from '../AddButton/AddButton';

function TasksBoard(): React.ReactElement {
  const classWrapper = 'tasks-board';
  const contentLayout = 'flex flex--align-start gap2';
  return (
    <Container classWrapper={classWrapper} contentLayout={contentLayout}>
      <TasksGroup />
      <TasksGroup />
      <TasksGroup />
      <AddButton type="status" extraClass="card">Add Status</AddButton>
    </Container>
  );
}

export default TasksBoard;
