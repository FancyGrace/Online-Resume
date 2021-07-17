import React, { Component } from 'react'

class Skill extends Component {

    render() {
        const skillStyle = {
            margin: "5px",
            padding: "0px 20px"
        }

        if (this.props.data) {
            var skill = <em>{this.props.data}</em>
        }
        return <div className="button" style={skillStyle}> {skill}</div>
    }
}

export default Skill;
