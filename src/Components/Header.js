import React, { Component } from "react";

class Home extends Component {

  render() {
    if (this.props.data) {
      var briefing = this.props.data.briefing;
      var networks = this.props.data.social.map((network) =>
        <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      );
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
          </ul>
        </nav>

        <div className="row banner" >
          <div className="banner-text">
            <h1>Hello, world!</h1>
            <h3> {briefing}</h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
    );
  }
}

export default Home
