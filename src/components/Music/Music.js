import React from 'react'
import Tracks from './Tracks'
import './Music.css'

const trackList = [
  { trackName: 'Righteous', src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557341630/Original%20Music/Righteous.wav', trackArtist: 'Mimas the moon' },
  { trackName: 'Finish Line', src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557341652/Original%20Music/Finish_Line.wav', trackArtist: 'Mimas the moon' },
  { trackName: 'Arms', src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557341687/Original%20Music/Arms.wav', trackArtist: 'Mimas the moon' },
  { trackName: 'Tank Operator', src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557341751/Original%20Music/Tank_Operator.wav', trackArtist: 'Mimas the moon' },
];

const Music = () => {
  return (
    <section className="Music">
      <Tracks items={trackList} />
    </section>
  );
}

export default Music;