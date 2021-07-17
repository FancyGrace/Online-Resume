import React, { Component } from 'react'

class Project extends Component {
    render() {
        if (this.props.project) {
            var { title, url, category, image } = this.props.project
        }

        return (
            <div key={title} className="columns portfolio-item">
                <div className="item-wrap">
                    <a href={url} title={title}>
                        <img alt={title} src={image} />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                                <h5>{title}</h5>
                                <p>{category}</p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Project
