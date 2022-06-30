import React from 'react';
import ViewActiveName from '../ViewActiveName/ViewActiveName';
import SidebarToggleButton from '../SidebarToggleButton/SidebarToggleButton';
import ViewList from '../ViewList/ViewList';
import Container from '../Container/Container';

function ControlsBar(): React.ReactElement {
  const classWrapper = 'bar bar--controls';
  const contentLayout = 'flex flex--align-center gap1';
  return (
    <Container classWrapper={classWrapper} contentLayout={contentLayout}>
      <SidebarToggleButton />
      <ViewActiveName />
      <ViewList />
    </Container>
  );
}

export default ControlsBar;
