import React, { Component } from 'react';
import './NasaDaily.css'
import { getDailyPics } from '../services/nasa-api'
import { getRandomPic } from '../services/nasa-api'

class NasaDaily extends Component {
  state = {
    dailyPics: [],
    randomPic: [],
    date: '2010-09-06'
  }
  async componentDidMount() {
    const dailyPics = await getDailyPics();
    const randomPic = await getRandomPic();
    this.setState({ dailyPics })
    this.setState({ randomPic })
  }
// this.state.randomPic.date
  // handleReview = (e) => {
	// 	console.log(e.target.value, "\n^^e.target.value reviewww")
	// 	setReview(e.target.value)
	// }
  handleChange = (event) => {
    this.setState({ date: event.target.value })
  }
  // event => this.setState({date: event.target.value}

  render() {

    return (
      <>

        {/* {this.state.dailyPics.map((daily) => ())} */}
        {/* <div>
          <form onSubmit={this.sendDataSomewhere}>
            <input name="date" value={this.state.date} onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="input-field col s12"> */}
          {/* <form action="/nasa-daily" method="GET">
            
            <input
              name="date"
              id="date"
              min="1995-06-16"
              type="date"
              className="active"
              value={this.state.date}
              onChange={this.handleChange}
            >
            </input>
          </form> */}

          {this.state.dailyPics.date ?
            <div className="daily">
              <div className="card-daily">
                <h2>Picture of the day - {this.state.dailyPics.date}</h2>
                <a href={this.state.dailyPics.hdurl} target="_blank" rel="noreferrer">
                  <img src={this.state.dailyPics.url} className="card-img-top" alt="nasa-pic-of-the-day"></img>
                </a>
                <div className="card-body">
                  <h5 className="card-title">{this.state.dailyPics.title} - {this.state.dailyPics.date}</h5>
                  <p className="card-text">{this.state.dailyPics.explanation}</p>
                  <p className="card-text"><small className="text-muted">Copyright: {this.state.dailyPics.copyright}</small></p>
                </div>
              </div>
              <div className="card-daily">
                <h2>Random date - {this.state.randomPic.date}</h2>
                <a href={this.state.randomPic.hdurl} target="_blank" rel="noreferrer">
                  <img src={this.state.randomPic.url} className="card-img-top" alt="nasa-random-day-pic"></img>
                </a>
                <div className="card-body">
                  <h5 className="card-title">{this.state.randomPic.title} - {this.state.randomPic.date}</h5>
                  <p className="card-text">{this.state.randomPic.explanation}</p>
                  <p className="card-text"><small className="text-muted">Copyright: {this.state.randomPic.copyright}</small></p>
                </div>
              </div>
            </div>
            :
            <div>
              <img src="https://worldwind.arc.nasa.gov/agrosphere/images/nasa.gif" alt="NASA GIF" />
            </div>
          }
      </>
    );
  }
}

export default NasaDaily;


