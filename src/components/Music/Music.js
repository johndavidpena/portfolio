import React from 'react'
import Icon from '../Icons/Icons'
import './Music.css'

const Music = (props) => (
  <section className="MusicWrapper">
    <div id={props.id} className="Music">
      <h2 className="Music__title">{props.title}</h2>
      <div className="Music__controls">
        <p className="Music__artist">{props.artist}</p>
        <div className="IconWrapper">
          <Icon
            clickHandler={props.stop}
            className="ControlIcons"
            name="stop"
            width={36}
            fill="#71a5ed" />
          <Icon
            clickHandler={props.play}
            className="ControlIcons"
            name="play"
            width={56}
            fill="#71a5ed" />
          <Icon
            clickHandler={props.pause}
            className="ControlIcons"
            name="pause"
            width={36}
            fill="#71a5ed" />
        </div>
      </div>
    </div>
  </section>
);

export default Music;