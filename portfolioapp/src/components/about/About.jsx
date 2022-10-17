import React from 'react'
import "./about.css"
import Image from "../../assets/avatar-1.svg";
import AboutBox from './AboutBox';

export default function About() {
  return (
<section className="about container section" id='about'>
  <h2 className='section__title'>About Me</h2>

  <div className="about__container grid">
    <img src={Image} alt="" className="about__img" />

    <div className="about__data grid">
      <div className="about__info">
        <p className="about__description">aaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaa
        </p>
       
        <a href="" className="btn">Download CV</a>
        </div>
        <div className="about__skills grid">
          
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Development</h3>
              <span className="skills__number development">90%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage development"></span>
              </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Backend Development</h3>
              <span className="skills__number ">90%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage ui__design"></span>
              </div>
          </div>

          
       
        </div>
      </div>
    </div>

<AboutBox />
  </section>
  )
}
