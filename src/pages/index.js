import React, { Component } from "react"
import '../components/index.css'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HomeTop from '../components/HomeTop/HomeTop'
import Work from '../components/Work/Work'
import Sites from '../SitesInfo'
import Music from '../components/Music/Music'
import Tracks from '../TracksInfo'
import Form from '../components/Form/form'
import finishLine from '../mp3s/finishLine.mp3'
import righteous from '../mp3s/righteous.mp3'
import outcast from '../mp3s/outcast.mp3'

// TODO: How do you import fonts? Need Avenir Next, 400, 700, 900

class IndexPage extends Component {
  state = {
    musicShowing: false,
    toggleText: 'music',
    selectedTrack: null,
    player: 'Stopped',
  }

  toggle = (e) => {
    this.setState({
      musicShowing: !this.state.musicShowing,
    });
    !this.state.musicShowing ? this.setState({ toggleText: 'websites' }) : this.setState({ toggleText: 'music' });
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
        this.setState({ player: 'Playing' });
      }
    }

    if (this.state.player !== prevState.player) {
      if (this.state.player === 'Paused') {
        this.player.pause();
      } else if (this.state.player === 'Stopped') {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (this.state.player === 'Playing' && prevState.player === 'Paused') {
        this.player.play();
      }
    }
  }

  render() {
    const sites = Sites.map(site => {
      return (
        <Work
          key={site.id}
          title={site.title}
          sub={site.sub}
          description={site.description}
          tools={site.tools}
          image={site.image}
          alt={site.alt}
          link={site.link} />
      );
    });

    const tracks = Tracks.map(track => {
      return (
        <Music
          key={track.id}
          id={track.id}
          title={track.title}
          artist={track.artist}
          image={track.image}
          alt={track.alt}
          status={this.state.player}
          play={() => {
            this.setState({ selectedTrack: track.title });
            if (this.state.player === 'Paused') {
              this.setState({ player: 'Playing' })
            }
          }}
          stop={() => {
            if (this.state.player === 'Playing') {
              this.setState({ player: 'Stopped' });
            }
          }}
          pause={() => {
            this.setState({ player: 'Paused' });
          }}
        />
      );
    });

    return (
      <Layout>
        <SEO title="Home" keywords={[`johndavidpena`, `mimas`, `mimasmusic`, `johnpena`]} />
        <HomeTop />
        <section className="Picker">
          <span className="Picker__text">
            <button
              onClick={this.toggle}
              ref={ref => this.toggleBtn = ref}>
              <span className="Picker__right">&#8603;</span>&nbsp;
              {this.state.toggleText}
            </button>
          </span>
        </section>

        {!this.state.musicShowing &&
          <React.Fragment>
            {sites}
          </React.Fragment>}

        {this.state.musicShowing &&
          <React.Fragment>
            {tracks}
            <audio ref={ref => this.player = ref} />
          </React.Fragment>}

        <Form />
      </Layout>
    );
  }
}

export default IndexPage
