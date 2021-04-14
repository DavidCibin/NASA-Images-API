import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar'
import NasaMars from '../NasaMars/NasaMars'


class App extends Component {
    state = {
        navItems: [
            { url: "/nasa", name: "Nasa Mars Rover Photos" },
        ]
    }
    render() {
        return (
            <>
                <NavBar navItems={this.state.navItems} />
                <Route exact path='/nasa' render={() => <NasaMars />} />
                {/* <Route exact path='/starship' render={( { location } ) => <StarshipDetails location={location} />} /> */}

            </>
        )
    }

}
// console.log(`${process.env.REACT_APP_API_KEY_NASA}`) 
export default App;
