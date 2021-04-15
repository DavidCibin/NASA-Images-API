import React from 'react'

const NavBar = (props) => {
  return(
    <header className="App-header">
      <img
        src='https://api.nasa.gov/assets/img/favicons/favicon-192.png'
        style={{ width: "100px", height: "100px" }}
        className="App-logo"
        alt="logo"
      />
      {props.navItems.map((navItem, idx) =>
        <a key={idx} href={navItem.url}>{navItem.name}</a>
      )}
    </header>
  )
}



export default NavBar