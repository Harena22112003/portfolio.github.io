import React from 'react'
import './About.css'
import cv2 from '../../assets/cv2.jpeg'

function About() {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>A propos</h1>
                <div className="about-sections">
                    <div className="about-left">
                        <img src={cv2} alt="" />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>Voici mes niveaux de maitrise des langages de programmation et informatiques que j'ai acquis dernièrement:</p>
                        </div>
                        <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /></div>
                            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "45%" }} /></div>
                            <div className="about-skill"><p>React JS</p><hr style={{ width: "65%" }} /></div>
                            <div className="about-skill"><p>Angular</p><hr style={{ width: "60%" }} /></div>
                            <div className="about-skill"><p>Tailwind CSS</p><hr style={{ width: "60%" }} /></div>
                            <div className="about-skill"><p>PHP</p><hr style={{ width: "40%" }} /></div>
                            <div className="about-skill"><p>MySQL</p><hr style={{ width: "75%" }} /></div>
                            <div className="about-skill"><p>CodeIgniter</p><hr style={{ width: "75%" }} /></div>
                            <div className="about-skill"><p>Java</p><hr style={{ width: "50%" }} /></div>
                            <div className="about-skill"><p>C & C#</p><hr style={{ width: "45%" }} /></div>
                            <div className="about-skill"><p>Python</p><hr style={{ width: "45%" }} /></div>
                            <div className="about-skill"><p>Microsoft Office</p><hr style={{ width: "95%" }} /></div>
                        </div>
                    </div>
                </div>
                <div className="about-achievements">
                    <div className='about-achievement'>
                        <h1>+3</h1>
                        <p>PROJETS ACHEVES</p>
                    </div>
                    <hr />
                    <div className='about-achievement'>
                        <h1>+2</h1>
                        <p>ANNEES D'EXPERIENCE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About