import React, { Component, useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import RighteousImage from '../../images/moon.jpg'
import Icon from '../Icons/Icons'

const trackArray = [
  { id: 1, trackName: 'Righteous', src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557341630/Original%20Music/Righteous.wav', trackArtist: 'Mimas the moon' },
  { id: 2, trackName: 'Finish Line', src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557341652/Original%20Music/Finish_Line.wav', trackArtist: 'Mimas the moon' },
  { id: 3, trackName: 'Arms', src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557341687/Original%20Music/Arms.wav', trackArtist: 'Mimas the moon' },
  { id: 4, trackName: 'Tank Operator', src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557341751/Original%20Music/Tank_Operator.wav', trackArtist: 'Mimas the moon' },
];

const Track = props => {
  const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <div
      className="TrackWrapper"
      onClick={() => set(flipped => !flipped)}
    >
      <a.div className="Track" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
        <img src={RighteousImage} className="FrontImage" alt="Image for Righteous" />
        <span className="FrontName">{props.trackName}</span>
      </a.div>

      <a.div className="Track" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
        <div className="BackTop">
          <img src={RighteousImage} className="BackImage" alt="Image for Righteous" />
          <div>
            <p className="BackName">{props.trackName}</p>
            <p className="BackArtist">{props.trackArtist}</p>
          </div>
        </div>
        <div className="BackBottom">
          <div className="Controls">
            <Icon
              className="ControlIcons"
              name="back"
              width={36}
              fill="#71a5ed" />
            <Icon
              className="ControlIcons"
              name="play"
              width={48}
              fill="#71a5ed" />
            <Icon
              className="ControlIcons"
              name="forward30"
              width={36}
              fill="#71a5ed" />
          </div>
          <div className="volume">
            <input type="range" name="volume" id="volume"/>
          </div>
        </div>
      </a.div>
    </div>
  );
}

class Tracks extends Component {
  render() {
    return (
      <React.Fragment>
        <Track
          key={trackArray[0].id}
          trackName={trackArray[0].trackName}
          src={trackArray[0].src}
          trackArtist={trackArray[0].trackArtist} />
        <Track
          key={trackArray[1].id}
          trackName={trackArray[1].trackName}
          src={trackArray[1].src}
          trackArtist={trackArray[1].trackArtist} />
        <Track
          key={trackArray[2].id}
          trackName={trackArray[2].trackName}
          src={trackArray[2].src}
          trackArtist={trackArray[2].trackArtist} />
        <Track
          key={trackArray[3].id}
          trackName={trackArray[3].trackName}
          src={trackArray[3].src}
          trackArtist={trackArray[3].trackArtist} />
      </React.Fragment>
    );
  }
}

export default Tracks;
