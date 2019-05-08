import React from 'react'
import './Controls.css'

const Controls = props => (
  <div className="Controls">
    <button
      className="playButton"
      onClick={props.play}
    >Play
    </button>
  </div>
);

export default Controls;