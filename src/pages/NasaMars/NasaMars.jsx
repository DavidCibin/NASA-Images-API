import React, { Component } from 'react';
import { getNasaPics } from '../services/nasa-api'
// import { Link } from 'react-router-dom'

class NasaMars extends Component {
  state = {
    nasaPics: []
  }
  async componentDidMount() {
    const nasaPics = await getNasaPics();
    console.log(nasaPics, 'listing??')
    this.setState({ nasaPics: nasaPics.photos })
  }



  render() {
    return (
      <>

        <div className="d-flex flex-wrap">
          {this.state.nasaPics.map((mars) => (

            <div className="card" key={mars.idx}>
              <img className="card-img-top" src={mars.img_src} alt="Card image cap"></img>
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
      </>
    );
  }
}


export default NasaMars;