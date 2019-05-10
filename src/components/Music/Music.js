import React from 'react'
import Tracks from './Tracks'
import { animated } from 'react-spring';
import './Music.css'

const Music = ({ style, back }) => {
  return (
    <animated.section className="Music" style={style}>
      <span
        className="MusicBack"
        onClick={back}>BACK</span>
      <Tracks />
    </animated.section>
  );
}

export default Music;