import React, { Component } from 'react'
import Typed from "react-typed";

class About extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name
            var profileImage = "images/" + this.props.data.profileImage
            var occupations = this.props.data.occupations
            var messages = this.props.data.messages.map((message) =>
                <div>
                    <h2>{message.title}</h2>
                    <p>{message.content}</p>
                </div>
            )
        }
        return (
            <section id="about">
                <div className="row">
                    <div className="four columns">
                        <div className="row information">
                            <div className="columns branding">
                                <img
                                    className="profile-pic"
                                    src={profileImage}
                                    alt="Profile Pic"
                                />
                                <h3>{name}</h3>
                                {occupations && <Typed
                                    className="typed"
                                    strings={occupations}
                                    typeSpeed={25}
                                    backSpeed={100}
                                    showCursor={false}
                                    loop
                                />}
                            </div>

                            <div className="columns download">
                                <p><a href="/#" className="button"><i className="fa fa-download"></i>Download Resume</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="eight columns main-col">{messages}</div>
                </div>

            </section >
        )
    }
}

export default About
