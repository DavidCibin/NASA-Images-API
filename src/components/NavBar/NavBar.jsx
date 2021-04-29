import React from 'react'

const NavBar = (props) => {
  return (
    <header className="App-header">
      <a href="/">
        <img
          href="/"
          src='https://api.nasa.gov/assets/img/favicons/favicon-192.png'
          style={{ width: "100px", height: "100px" }}
          className="App-logo"
          alt="logo"
        />
      </a>
      {props.navItems.map((navItem, idx) =>
        <a className="nav-a" key={idx} href={navItem.url}>{navItem.name}</a>
      )}
    </header>
  )
}

export default NavBar