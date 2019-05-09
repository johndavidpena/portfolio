import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import swap from 'lodash-move'
import { useGesture } from 'react-use-gesture'
import { useSprings, animated, interpolate } from 'react-spring'
import { Howl, Howler } from 'howler'
import Controls from './Controls'
import './Tracks.css'

// Returns fitting styles for dragged/idle items
const fn = (order, down, originalIndex, curIndex, y) => index =>
  down && index === originalIndex
    ? { y: curIndex * 100 + y, scale: 1.1, zIndex: '1', shadow: 15, immediate: n => n === 'y' || n === 'zIndex' }
    : { y: order.indexOf(index) * 100, scale: 1, zIndex: '0', shadow: 1, immediate: false }

const Tracks = ({ items }) => {
  let currentOrder = [0, 1, 2, 3];

  const order = useRef(items.map((_, index) => index)); // Store indicies as a local ref, this represents the item order

  const [springs, setSprings] = useSprings(items.length, fn(order.current)); // Create springs, each corresponds to an item, controlling its transform, scale, etc.

  const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)
    setSprings(fn(newOrder, down, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!down) order.current = newOrder

    currentOrder = newOrder;
  });

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  const play = () => {
    let index = currentOrder[0];
    console.log('play called, track playing is', items[index].trackName);

    const Track = new Howl({
      src: [items[index].src],
      volume: 0.5,
      // onend: function () {
      //   TODO: Check currentOrder and play currentOrder[1]
      // }
    });

    Track.play();
  }

  return (
    <React.Fragment>
      <Controls play={play} />
      <div className="Tracks-all" style={{ height: items.length * 100 }}>
        {springs.map(({ zIndex, shadow, y, scale }, i) => (
          <animated.div

            {...bind(i)}
            key={i}
            style={{
              zIndex,
              boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
              transform: interpolate([y, scale], (y, s) => `translate3d(0,${y}px,0) scale(${s})`)
            }}
            className="Tracks-box"
          >
            <div className="Tracks-info">
              <p className="Tracks-title">{items[i].trackName}</p>
              <p className="Tracks-artist">{items[i].trackArtist}</p>
            </div>
            <div className="Tracks-animation">
              {/* <MusicAnimation /> */}
              <p>X</p>
            </div>
          </animated.div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Tracks;
