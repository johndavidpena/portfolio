import React from 'react'
import './Work.css'

const Work = props => (
  <section className="WorkWrapper">
    <div className="Work">
      <h2 className="Work__title">{props.title}</h2>
      <p className="Work__subTitle">{props.sub}</p>
      <h3 className="Work__toolsHeading">TOOLS: </h3>
      <p className="Work__tools">{props.tools}</p>
      <div className="Work__siteButton">
        <a href={props.link}>
          <img src={props.image} alt={props.alt} className="Work__image" />
        </a>
      </div>
    </div>
  </section>
);

export default Work;
