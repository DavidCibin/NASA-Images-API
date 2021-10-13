import React, { Component } from 'react';
import './NasaDaily.css'
import { getDailyPics, getRandomPic, getMyDate } from '../services/nasa-api'

class NasaDaily extends Component {
  state = {
    dailyPics: [],
    randomPic: [],
    date: 'DD-MM-YYYY',
    today: new Date().toISOString().slice(0, 10),
    datePic: {},
  }
  async componentDidMount() {
    const dailyPics = await getDailyPics();
    const randomPic = await getRandomPic();
    this.setState({ dailyPics })
    this.setState({ randomPic })
  }
  
  handleChange = async (event) => {
    const datePic = await getMyDate(event.target.value);
    this.setState({ datePic })
  }

  render() {

    return (
      <>
        {this.state.dailyPics.date ?
          <div className="daily">
            <div className="card-daily">
              <h4>Picture of the day - {this.state.dailyPics.date}</h4>

              {(this.state.dailyPics.media_type === 'video' || this.state.dailyPics.media_type === 'other') ?
                <iframe
                  title="video"
                  className="videos"
                  frameborder="2"
                  allowfullscreen="allowfullscreen"
                  webkitallowfullscreen
                  mozallowfullscreen
                  oallowfullscreen
                  msallowfullscreen
                  src={this.state.dailyPics.url}
                >
                </iframe>
                :
                <a href={this.state.dailyPics.hdurl} target="_blank" rel="noreferrer">
                  <img src={this.state.dailyPics.url} className="card-img-top" alt="nasa-pic-of-the-day"></img>
                </a>
              }
              <div className="card-body">
                <h5 className="card-title">{this.state.dailyPics.title} - {this.state.dailyPics.date}</h5>
                <p className="card-text">{this.state.dailyPics.explanation}</p>
                <p className="card-text"><small className="text-muted">Copyright: {this.state.dailyPics.copyright}</small></p>
              </div>
            </div>
            <div className="card-daily">
              {!this.state.datePic.url ?
                <>
                  <div className="datepic">
                    <form onSubmit>
                      <button className="">Random Date</button>
                    </form>
                    <h4>or</h4>
                    <input
                      name="date"
                      id="date"
                      min="1995-06-20"
                      max={this.state.dailyPics.date}
                      type="date"
                      className="active"
                      value={this.state.date}
                      onChange={this.handleChange}
                    >
                    </input>
                  </div>
                  {(this.state.randomPic.media_type === 'video' || this.state.randomPic.media_type === 'other') ?
                    <iframe
                      title="video"
                      className="videos"
                      frameborder="2"
                      allowfullscreen="allowfullscreen"
                      webkitallowfullscreen
                      mozallowfullscreen
                      oallowfullscreen
                      msallowfullscreen
                      src={this.state.randomPic.url}
                    >
                    </iframe>
                    :
                    <a href={this.state.randomPic.hdurl} target="_blank" rel="noreferrer">
                      <img src={this.state.randomPic.url} className="card-img-top" alt="nasa-random-day-pic"></img>
                    </a>
                  }
                  <div className="card-body">
                    <h5 className="card-title">{this.state.randomPic.title} - {this.state.randomPic.date}</h5>
                    <p className="card-text">{this.state.randomPic.explanation}</p>
                    <p className="card-text"><small className="text-muted">Copyright: {this.state.randomPic.copyright}</small></p>
                  </div>
                </>
                :
                <>
                  <div className="datepic">
                    <form onSubmit>
                      <button className="">Random Date</button>
                    </form>
                    <h4>or</h4>
                    <input
                      name="date"
                      id="date"
                      min="1995-06-20"
                      max={this.state.dailyPics.date}
                      type="date"
                      className="active"
                      value={this.state.datePic.date}
                      onChange={this.handleChange}
                    >
                    </input>
                  </div>
                  {(this.state.datePic.media_type === 'video' || this.state.datePic.media_type === 'other') ?
                    <iframe
                      title="video"
                      className="videos"
                      frameborder="2"
                      allowfullscreen="allowfullscreen"
                      webkitallowfullscreen
                      mozallowfullscreen
                      oallowfullscreen
                      msallowfullscreen
                      src={this.state.datePic.url}
                    >
                    </iframe>
                    :
                    <a href={this.state.datePic.hdurl} target="_blank" rel="noreferrer">
                      <img src={this.state.datePic.url} className="card-img-top" alt="nasa-random-day-pic"></img>
                    </a>
                  }
                  <div className="card-body">
                    <h5 className="card-title">{this.state.datePic.title} - {this.state.datePic.date}</h5>
                    <p className="card-text">{this.state.datePic.explanation}</p>
                    <p className="card-text"><small className="text-muted">Copyright: {this.state.datePic.copyright}</small></p>
                  </div>
                </>
              }
            </div>
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

export default NasaDaily;


