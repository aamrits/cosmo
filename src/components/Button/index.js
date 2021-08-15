import React from 'react';
import './styles.scss';

const Button = (props) => {
  return (
    <>
      <button className="btn-custom">
        { props.text ? props.text : 'Default' }
      </button>
    </>
  )
}

export default Button
