import React from 'react'
import { animated } from 'react-spring'
import './Info.css'

const Info = ({ style }) => {
  return (
    <animated.div
      className="Info"
      style={style}
    >
      <p className="Info__text">I am a former music educator, turned web developer. After teaching in a variety of educational settings from public high schools to charter schools for at-risk youth as well as a project-based program for creativity and the arts, I decided to follow a different career path. With a dedicated and focused effort on learning the skills and knowledge required of a full stack developer, I am currently working as a professional freelance web designer.</p>
      <p className="Info__text">Teaching music has remained a passion and interest since leaving the formal education system. Consequently, I have created a music instruction website called Mimas Music that teaches beginners several instruments, including guitar, the singing voice, piano/keyboard, and bass guitar. The comprehensive program emphasizes creativity and songwriting while providing numerous hands-on activities and interactive digital experiences</p>
      <p className="Info__text">As a multi-instrumental musician and songwriter myself, I still enjoy composing and recording music in my free time as <i>Mimas the moon</i>. With the advent of the Web Audio and Web MIDI api's for modern browsers, I am able to program and make use of digital tools and instruments written in javascript. Thanks for checking out the site.</p>
    </animated.div>
  )
}

export default Info;
