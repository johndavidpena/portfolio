import React, { Component } from "react"
import '../components/index.css'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HomeTop from '../components/HomeTop/HomeTop'
import Picker from '../components/Picker/Picker'
import Work from '../components/Work/Work'
import Music from '../components/Music/Music'

// TODO: How do you import fonts? Need Avenir Next, 400 and 700

class IndexPage extends Component {
  state = {
    sitesShowing: true,
    musicShowing: false
  }

  toggleSites = () => {
    this.setState({
      sitesShowing: !this.state.sitesShowing,
      musicShowing: !this.state.musicShowing,
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`johndavidpena`, `mimas`, `mimasmusic`, `johnpena`]} />
        <HomeTop />
        <Picker toggle={this.toggleSites} />
        {this.state.sitesShowing &&
          <React.Fragment>
            <Work title='Mimas Music' sub='Interactive Music Education'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perferendis perspiciatis porro nobis ratione suscipit minima qui dolor necessitatibus. Dolores aliquam illum consectetur praesentium, laborum tempora expedita maxime doloribus assumenda.' />
            <Work title='Cafe Racer' sub='Modern Commerce'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perferendis perspiciatis porro nobis ratione suscipit minima qui dolor necessitatibus. Dolores aliquam illum consectetur praesentium, laborum tempora expedita maxime doloribus assumenda.' />
            <Work title="Feedin' Time" sub='Mobile Web App'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perferendis perspiciatis porro nobis ratione suscipit minima qui dolor necessitatibus. Dolores aliquam illum consectetur praesentium, laborum tempora expedita maxime doloribus assumenda.' />
          </React.Fragment>}

        {this.state.musicShowing && <Music />}
      </Layout>
    );
  }
}

export default IndexPage
