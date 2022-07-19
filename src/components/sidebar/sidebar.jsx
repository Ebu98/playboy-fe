import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar(props) {
  return (
      <Link to={props.to}>
    <div>
        {props.image}
        <h4>{props.title}</h4>
    </div>
    </Link>
  )
}

export default Sidebar;