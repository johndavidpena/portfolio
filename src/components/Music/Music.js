import React from 'react'
import TrackCard from './TrackCard'
import './Music.css'

const trackArray = [
  { id: 1, trackName: 'Righteous', src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557341630/Original%20Music/Righteous.wav', trackArtist: 'Mimas the moon' },
  { id: 2, trackName: 'Finish Line', src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557341652/Original%20Music/Finish_Line.wav', trackArtist: 'Mimas the moon' },
  { id: 3, trackName: 'Arms', src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557341687/Original%20Music/Arms.wav', trackArtist: 'Mimas the moon' },
  { id: 4, trackName: 'Tank Operator', src: 'https://res.cloudinary.com/mimas-music/video/upload/v1557341751/Original%20Music/Tank_Operator.wav', trackArtist: 'Mimas the moon' },
];

const Music = () => {
  return (
    <section className="Music">
      {trackArray.map(track => {
        return (
          <TrackCard key={track.id}
            trackName={track.trackName}
            trackArtist={track.trackArtist}
            trackSrc={track.src}
          />
        );
      })}
    </section>
  );
}

export default Music;