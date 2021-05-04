import React, { Component } from 'react';
import './NasaMars.css'
import { getNasaPics } from '../services/nasa-api'


class NasaMars extends Component {
  state = {
    nasaPics: []
  }
  async componentDidMount() {
    const nasaPics = await getNasaPics();
    this.setState({ nasaPics: nasaPics.photos })
  }

  render() {
    return (
      <>
        {this.state.nasaPics[0] ?
          <div className="d-flex flex-wrap">
            {this.state.nasaPics.map((mars, idx) => (

              <div className="card" key={idx}>
                <img className="card-img-top" src={mars.img_src} alt="NASA MARS ROVER PICS"></img>
                <div className="card-body">
                  <h5 className="card-title">{mars.camera.full_name}</h5>
                  <h6 className="card-title">Photo taken on: {mars.earth_date}</h6>
                  <span className="card-text">Rover Name: {mars.rover.name}</span><br />
                  <span className="card-text">Status: {mars.rover.status}</span><br />
                  <span className="card-text">Landed: {mars.rover.landing_date}</span><br />
                  <span className="card-text">Launched: {mars.rover.launch_date}</span>
                </div>
              </div>
            ))}
          </div>
          :
          <div>
            <img className="gif" src="https://worldwind.arc.nasa.gov/agrosphere/images/nasa.gif" alt="NASA GIF" />
          </div>
        }
      </>
    );
  }
}


export default NasaMars;