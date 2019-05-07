import React from 'react'
import { animated } from 'react-spring'
import './Info.css'

const Info = ({ style }) => {
  return (
    <animated.div
      className="Info"
      style={style}
    >
      <p className="Info__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam et facilis ex quos! In qui quidem dolores provident illum doloremque, facere quibusdam, ullam nam voluptatum repellendus maiores eum, assumenda sint?</p>
      <p className="Info__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam et facilis ex quos! In qui quidem dolores provident illum doloremque, facere quibusdam, ullam nam voluptatum repellendus maiores eum, assumenda sint?</p>
    </animated.div>
  )
}

export default Info;
