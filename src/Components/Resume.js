import React, { Component } from 'react';
import ResumeSection from './ResumeSection'
import ResumeTabs from './ResumeTabs'
import Skill from './Skill'
import 'react-tabs/style/react-tabs.css';

class Resume extends Component {

    education(education) {
        var composedEducation = education.map((education) => {
            var degrees = education.degrees.map((degree) =>
                <div key={degree.school}>
                    <h3>{degree.school}</h3>
                    <p className="info">{degree.degree} <><span>&bull;</span><em className="date">{degree.from} - {degree.to}</em></></p>
                    <p>{degree.description}</p></div>
            )

            return {
                tab: education.category,
                degrees: degrees
            }
        })
        var tabs = composedEducation.map((composedEducation) => composedEducation.tab)
        var panels = composedEducation.map((composedEducation) => composedEducation.degrees)

        return <ResumeSection category="education" title="education">
            <ResumeTabs tabs={tabs} panels={panels} />
        </ResumeSection>
    }

    experience(experience) {
        var composedExperience = experience.map((experience) => {
            var works = experience.works.map((work) =>
                <div key={work.company}>
                    <h3>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                    <p>{work.description}</p>
                </div>
            )

            return {
                tab: experience.category,
                works: works
            }
        });
        var tabs = composedExperience.map((composedExperience) => composedExperience.tab)
        var panels = composedExperience.map((composedExperience) => composedExperience.works)

        return <ResumeSection category="work" title="experience">
            <ResumeTabs tabs={tabs} panels={panels} />
        </ResumeSection>
    }

    skills(skills) {
        var composedSkills = skills.map((skill) => {
            var message = <p>{skill.skillmessage}</p>
            var skills = skill.skills.map((skill) => <Skill data={skill} />)
            var skillBlock = <div>{message}{skills}</div>

            return {
                tab: skill.category,
                skillBlock: skillBlock
            }
        });
        var tabs = composedSkills.map((composedSkill) => composedSkill.tab)
        var panels = composedSkills.map((composedSkill) => composedSkill.skillBlock)

        return <ResumeSection category="skills" title="skills">
            <ResumeTabs tabs={tabs} panels={panels} />
        </ResumeSection>
    }

    render() {
        if (this.props.data) {
            var education = this.education(this.props.data.education)
            var experience = this.experience(this.props.data.experience)
            var skills = this.skills(this.props.data.skills)
        }

        return (
            <section id="resume">
                {education}
                {experience}
                {skills}
            </section>
        );
    }
}

export default Resume;
