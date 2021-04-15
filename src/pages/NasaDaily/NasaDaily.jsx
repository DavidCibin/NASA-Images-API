import React, { Component } from 'react';
import './NasaDaily.css'
import { getDailyPics } from '../services/nasa-api'
import { getRandomPic } from '../services/nasa-api'

class NasaDaily extends Component {
  state = {
    dailyPics: [],
    randomPic: [],
    date: ''
  }
  async componentDidMount() {
    const dailyPics = await getDailyPics();
    const randomPic = await getRandomPic();
    console.log(dailyPics, 'daily list??')
    console.log(randomPic, 'randomPic??')
    this.setState({ dailyPics })
    this.setState({ randomPic })
  }

  handleChange = (e, { date, value }) => {
    console.log(date, value)
    this.setState({ [date]: value })
  }

  render() {

    return (
      <>

        {/* {this.state.dailyPics.map((daily) => ())} */}

        {/* <div>
          <Form onSubmit={this.sendDataSomewhere}>
            <Form.Field>
              <Form.Input name="date" value={this.state.date} onChange={this.handleChange} />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </div> */}

        <div className="daily">
          <div class="card-daily">
            <h2>Picture of the day - {this.state.dailyPics.date}</h2>
            <a href={this.state.dailyPics.hdurl} target="_blank">
              <img src={this.state.dailyPics.url} class="card-img-top" alt="nasa-pic-of-the-day"></img>
            </a>
            <div class="card-body">
              <h5 class="card-title">{this.state.dailyPics.title} - {this.state.dailyPics.date}</h5>
              <p class="card-text">{this.state.dailyPics.explanation}</p>
              <p class="card-text"><small class="text-muted">Copyright: {this.state.dailyPics.copyright}</small></p>
            </div>
          </div>
          <div class="card-daily">
            <h2>Random date - {this.state.randomPic.date}</h2>
            <a href={this.state.randomPic.hdurl} target="_blank">
              <img src={this.state.randomPic.url} class="card-img-top" alt="nasa-random-day-pic"></img>
            </a>
            <div class="card-body">
              <h5 class="card-title">{this.state.randomPic.title} - {this.state.randomPic.date}</h5>
              <p class="card-text">{this.state.randomPic.explanation}</p>
              <p class="card-text"><small class="text-muted">Copyright: {this.state.randomPic.copyright}</small></p>
            </div>
          </div>
        </div>


      </>
    );
  }
}

export default NasaDaily;


