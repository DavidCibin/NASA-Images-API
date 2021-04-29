import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import NasaMars from '../NasaMars/NasaMars'
import NasaDaily from '../NasaDaily/NasaDaily'


class App extends Component {
    state = {
        randomPic: [],
        navItems: [
            { url: "/nasa-daily", name: " Astronomy Picture of the Day" },
            { url: "/nasa-mars", name: "Nasa Mars Rover Photos" },
        ]
    }

    render() {

        return (
            <>
                <NavBar navItems={this.state.navItems} />
                <Route exact path='/nasa-mars' render={() => <NasaMars />} />
                <Route exact path='/nasa-daily' render={() => <NasaDaily />} />
            </>
        )
    }
}
export default App;
