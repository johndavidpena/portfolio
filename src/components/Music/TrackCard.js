import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import Image from '../image'

const TrackCard = props => {
  const [flipped, set] = useState(true);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <div
      className="TrackCard-box"
      onClick={() => set(state => !state)}
    >
      <a.div className="Card back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
        <p>Back - {props.trackArtist}</p>
      </a.div>

      <a.div className="Card front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
        <span className="CardTrackName">{props.trackName}</span>
        <Image />
      </a.div>
    </div>
  );
}

export default TrackCard
