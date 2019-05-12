import React, { Component } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HomeTop from '../components/HomeTop/HomeTop'
import Picker from '../components/Picker/Picker'
import Work from '../components/Work/Work'
import Sites from '../SitesInfo'
import Music from '../components/Music/Music'
import finishLine from '../mp3s/finishLine.mp3'
import FinishImage from '../images/finishImage.jpg'
import righteous from '../mp3s/righteous.mp3'
import RighteousImage from '../images/righteousImage.jpg'
import outcast from '../mp3s/outcast.mp3'
import OutcastImage from '../images/outcastImage.jpg'
import '../components/index.css'

// TODO: How do you import fonts? Need Avenir Next, 400 and 700

class IndexPage extends Component {
  state = {
    musicShowing: false,
    selectedTrack: null,
    player: 'stopped',
  }

  toggle = (e) => {
    this.setState({
      musicShowing: !this.state.musicShowing
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch (this.state.selectedTrack) {
        case "Finish Line":
          track = finishLine
          break;
        case "Righteous":
          track = righteous
          break;
        case "Outcast":
          track = outcast
          break;
        default:
          break;
      }
      if (track) {
        this.player.src = track;
        this.player.play();
        this.setState({ player: 'playing' });
      }
    }

    if (this.state.player !== prevState.player) {
      if (this.state.player === 'paused') {
        this.player.pause();
      } else if (this.state.player === 'stopped') {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (this.state.player === 'playing' && prevState.player === 'paused') {
        this.player.play();
      }
    }
  }

  render() {
    const tracks = [{ id: 'one', title: 'Finish Line', artist: 'Mimas the moon', image: FinishImage, alt: 'A dead end sign' }, { id: 'two', title: 'Righteous', artist: 'Mimas the moon', image: RighteousImage, alt: 'A blind mannequin' }, { id: 'three', title: 'Outcast', artist: 'Mimas the moon', image: OutcastImage, alt: 'A loner on a dirt road' }].map(track => {
      return (
        <Music
          id={track.id}
          key={track.id}
          title={track.title}
          artist={track.artist}
          image={track.image}
          alt={track.alt}
          play={() => {
            this.setState({ selectedTrack: track.title });
            if (this.state.player === 'paused') {
              this.setState({ player: 'playing' })
            }
          }}
          stop={() => {
            if (this.state.player === 'playing') {
              this.setState({ player: 'stopped' });
            }
          }}
          pause={() => {
            this.setState({ player: 'paused' });
          }}
        />
      );
    });

    return (
      <Layout>
        <SEO title="Home" keywords={[`johndavidpena`, `mimas`, `mimasmusic`, `johnpena`]} />
        <HomeTop />
        <Picker toggle={this.toggle} />

        {!this.state.musicShowing &&
          <React.Fragment>
            <Work
              title={Sites[0].title}
              sub={Sites[0].sub}
              description={Sites[0].description}
              tools={Sites[0].tools}
              image={Sites[0].image}
              alt={Sites[0].alt}
              link={Sites[0].link} />
            <Work
              title={Sites[1].title}
              sub={Sites[1].sub}
              description={Sites[1].description}
              tools={Sites[1].tools}
              image={Sites[1].image}
              alt={Sites[1].alt}
              link={Sites[1].link} />
            <Work
              title={Sites[2].title}
              sub={Sites[2].sub}
              description={Sites[2].description}
              tools={Sites[2].tools}
              image={Sites[2].image}
              alt={Sites[2].alt}
              link={Sites[2].link} />
          </React.Fragment>
        }

        {this.state.musicShowing &&
          <React.Fragment>
            {tracks}
            <audio ref={ref => this.player = ref} />
          </React.Fragment>
        }
      </Layout>
    );
  }
}

export default IndexPage
