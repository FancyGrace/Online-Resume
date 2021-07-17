import React, { Component } from 'react';
import Project from './Project'

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map((project) => {
        var projectImage = 'images/portfolio/' + project.image;
        return { ...project, "image": projectImage }
      })
      var projectsComponents = projects.map((project) => <Project project={project} />)
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projectsComponents}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
