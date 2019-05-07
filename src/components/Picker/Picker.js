import React, { Component } from 'react'
import './Picker.css'
import Work from '../../components/Work/Work'
import Music from '../../components/Music/Music'

class Picker extends Component {
  state = {
    showSites: true
  }

  handleSwitch = (event) => {
    event.preventDefault();

    this.setState({
      showSites: !this.state.showSites
    })
  }

  render() {
    return (
      <section className="Picker">
        <h2 className="Picker__hidden">Websites and Music</h2>
        <fieldset className="Picker__fieldset">
          <legend className="Picker__legend">Select whether you would like to view web projects or music.</legend>

          <label htmlFor="websites" className="Picker__websites">
            <input type="checkbox" className="Picker__websites-input" value="websites" id="websites" checked />
            <span className="Picker__websites-checkbox"></span>
            <span className="Picker__websites-checkbox-label">&nbsp;websites</span>
          </label>

          <label htmlFor="music" className="Picker__music">
            <input type="checkbox" className="Picker__music-input" value="music" id="music" />
            <span className="Picker__music-checkbox"></span>
            <span className="Picker__music-checkbox-label">&nbsp;music</span>
          </label>
        </fieldset>

        {/* <div className="Picker__boxWrapper">
          <label className="Picker__checkbox">Websites
              {this.state.showSites && <input type="checkbox" ref={(input) => this.sites = input} onChange={this.handleSwitch} checked />}
            {!this.state.showSites && <input type="checkbox" ref={(input) => this.sites = input} onChange={this.handleSwitch} />}
            <span className="Picker__checkmark"></span>
          </label>
        </div>
        <div className="Picker__boxWrapper">
          <label className="Picker__checkbox">Music
              {!this.state.showSites && <input type="checkbox" ref={(input) => this.music = input} onChange={this.handleSwitch} checked />}
            {this.state.showSites && <input type="checkbox" ref={(input) => this.music = input} onChange={this.handleSwitch} />}
            <span className="Picker__checkmark"></span>
          </label>
        </div> */}

        {/* {this.state.showSites && <Work />}
        {!this.state.showSites && <Music />} */}
      </section>
    )
  }
}

export default Picker;
