import React, { useState } from "react"
import { useSpring } from 'react-spring';
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HomeTop from '../components/HomeTop/HomeTop'
import Picker from '../components/Picker/Picker'
import Work from '../components/Work/Work'
import Music from '../components/Music/Music'
import '../components/index.css'

// TODO: How do you import fonts? Need Avenir Next, 400 and 700

const IndexPage = () => {
  const [isMusicOpen, setMusicOpen] = useState(false);

  const musicAnimation = useSpring({
    transform: isMusicOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`
  });

  const toggleSites = (e) => {
    // console.log('toggleSites', e.target.checked);
    e.persist();
    setMusicOpen(!isMusicOpen);
    setTimeout(() => {
      e.target.checked = true;
    }, 500);
  }

  const toggleMusic = (e) => {
    // console.log('toggleMusic', e.target.checked);
    e.persist();
    setMusicOpen(!isMusicOpen);
    setTimeout(() => {
      e.target.checked = false;
    }, 500);
  }

  const back = () => {
    setMusicOpen(!isMusicOpen);
  }

  return (
    <Layout>
      <SEO title="Home" keywords={[`johndavidpena`, `mimas`, `mimasmusic`, `johnpena`]} />
      <HomeTop />
      <Picker toggleSites={toggleSites} toggleMusic={toggleMusic} />
      <React.Fragment>
        <Work title='Mimas Music' sub='Interactive Music Education'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perferendis perspiciatis porro nobis ratione suscipit minima qui dolor necessitatibus. Dolores aliquam illum consectetur praesentium, laborum tempora expedita maxime doloribus assumenda.' />
        <Work title='Cafe Racer' sub='Modern Commerce'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perferendis perspiciatis porro nobis ratione suscipit minima qui dolor necessitatibus. Dolores aliquam illum consectetur praesentium, laborum tempora expedita maxime doloribus assumenda.' />
        <Work title="Feedin' Time" sub='Mobile Web App'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perferendis perspiciatis porro nobis ratione suscipit minima qui dolor necessitatibus. Dolores aliquam illum consectetur praesentium, laborum tempora expedita maxime doloribus assumenda.' />
      </React.Fragment>

      <Music style={musicAnimation} back={back} />
    </Layout>
  );
}

export default IndexPage
