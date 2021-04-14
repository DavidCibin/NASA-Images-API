import React, { Component } from 'react';
import { getDailyPics } from '../services/nasa-api'

class NasaDaily extends Component {
  state = {
    dailyPics: {}
  }
  async componentDidMount() {
    const dailyPics = await getDailyPics();
    console.log(dailyPics, 'daily list??')
    this.setState({ dailyPics })
  }


  render() {

    return (
      <>

        

        <div>
          <h4>{this.state.dailyPics.date}</h4>
          <img src={this.state.dailyPics.url}></img>

        </div>
      </>
    );
  }
}

export default NasaDaily;