import React from "react"
import { Link } from "gatsby"
import '../components/index.css'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Home__top">
      <h1 className="Home__title">JOHN<span className="Home__title-period">.</span></h1>
      <p className="Home__who">Hi, my name is John Pena and I make websites.</p>
      <p className="Home__who">As <span className="Home__who-mimas">Mimas the moon</span>, I make music.</p>
      <p className="Home__who">I lovingly created and maintain <a className="Home__who-link" href="www.mimasmusic.com" className="Home__who-link" target="_blank">mimasmusic</a></p>
      <p className="Home__see">Check out some of my work below <span className="Home__see-down">&#8623;</span></p>
    </div>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
