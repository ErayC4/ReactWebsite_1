import React from 'react';

function DropdownButton({ isOpen, onToggle, displayIcon, switchIcon }) {
  return (
    <div>
      <button onClick={onToggle}>
        {isOpen ? <div>{switchIcon}</div> : <div>{displayIcon}</div>}
      </button>
    </div>
  );
}

export default DropdownButton;
