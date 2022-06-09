import React from 'react';
import '../Option/Option.sass';
import './ViewActiveName.sass';

function ViewActiveName(): React.ReactElement {
  return (
    <div className="view-active-name">
      <button type="button" className="view-active-name__status" aria-label="Change status" value="not chosen" />
      <p className="view-active-name__name">List S</p>
      <button type="button" className="view-active-name__option option" aria-label="Settings">
        <span className="option__ellipsis" />
      </button>
    </div>
  );
}

export default ViewActiveName;
