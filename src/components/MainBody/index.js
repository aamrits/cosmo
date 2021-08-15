import React from 'react'

const MainBody = (props) => {
  return (
    <div className="container">
      <div className="row">
        { props.children }
      </div>
    </div>
  )
}

export default MainBody
