import React from 'react'
import { useSpring, animated } from 'react-spring'
import './WorkCards.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Work = (props) => {
  const [values, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

  return (
    <section id="cardWrapper">
      <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: values.xys.interpolate(trans) }}
      >
        <h2 className="Work__title">{props.title}</h2>
        <p className="Work__subTitle">{props.sub}</p>
        <p className="Work__description">{props.description}</p>
      </animated.div>
    </section>
  );
}

export default Work;
