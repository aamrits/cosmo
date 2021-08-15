import React from 'react';
import './styles.scss';

const ToggleButton = () => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" checked />
        <span className="slider round"></span>
      </label>
    </>
  )
}

export default ToggleButton
