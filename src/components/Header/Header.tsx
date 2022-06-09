import React from 'react';
import ControlsBar from '../ControlsBar/ControlsBar';

function Header(): React.ReactElement {
  return (
    <header className="header flex flex--column">
      <ControlsBar />
    </header>
  );
}

export default Header;
