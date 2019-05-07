import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>Developer, musician, warrior, hero</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
