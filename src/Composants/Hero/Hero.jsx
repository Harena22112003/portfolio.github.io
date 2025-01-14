import React from 'react'
import './Hero.css'
import cv1 from '../../assets/cv1.jpg'
import cv from '../../assets/cv_officiel_harena.pdf'

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={cv1} alt=""/>
        <h1>Bienvenue, <span>je suis Harena</span> et je suis un Développeur Fullstack.</h1>
        <p>Je suis un développeur polyvalent.</p>
        <div className="hero-action">
            <div className="hero-cv"><a href={cv}>Mon CV</a></div>
        </div>
    </div>
  )
}

export default Hero