import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import NasaMars from '../NasaMars/NasaMars'
import NasaDaily from '../NasaDaily/NasaDaily'


class App extends Component {
    state = {
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
                
                
                {/* <Route exact path='/starship' render={( { location } ) => <StarshipDetails location={location} />} /> */}
            </>

        )
    }

}
// console.log(`${process.env.REACT_APP_API_KEY_NASA}`) 
export default App;
