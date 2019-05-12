import React from 'react'
import './Picker.css'

const Picker = props => (

  <section className="Picker">
    <h2 className="Picker__hidden">Websites and Music</h2>
    <fieldset className="Picker__fieldset">
      <legend className="Picker__legend">Select whether you would like to view web projects or music.</legend>

      <label htmlFor="websites" className="Picker__websites">
        <input
          type="checkbox"
          className="Picker__websites-input"
          value="websites"
          id="websites"
          onClick={props.toggle}
          defaultChecked />
        <span className="Picker__websites-checkbox"></span>
        <span className="Picker__websites-checkbox-label">&nbsp;websites</span>
      </label>

      <label htmlFor="music" className="Picker__music">
        <input
          type="checkbox"
          className="Picker__music-input"
          value="music"
          id="music"
          onClick={props.toggle} />
        <span className="Picker__music-checkbox"></span>
        <span className="Picker__music-checkbox-label">&nbsp;music</span>
      </label>
    </fieldset>
  </section>
);

export default Picker;
