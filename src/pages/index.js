import React, { Component } from "react"
import '../components/index.css'

import Layout from "../components/layout/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HomeTop from '../components/HomeTop/HomeTop'
import Picker from '../components/Picker/Picker'
import Card from '../components/Card/Card'

// TODO: How do you import fonts? Need Avenir Next, 400 and 700
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`johndavidpena`, `mimas`, `mimasmusic`, `johnpena`]} />
    <HomeTop />
    <Picker />
    <div id="cardWrapper">
      <Card />
    </div>
  </Layout>
)

export default IndexPage
