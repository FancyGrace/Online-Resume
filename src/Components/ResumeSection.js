import React, { Component } from 'react'

class ResumeSection extends Component {
    render() {
        if (this.props) {
            var { category, title, children } = this.props
        }

        return (
            <div className={"row " + category}>
                <div className="three columns header-col">
                    <h1><span>{title}</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResumeSection
