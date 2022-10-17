import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from "./ScrollDown";
import Shapes from './Shapes';
export default function Home() {
  return (
 <section className="home" id='home'>
  <div className="intro">
    <img src={Me} alt='' className='home__img'/>
<h1 className='home__name'>Ruveyda Eto </h1>
<span className='home__education'>Hi, I'am a Front-End Developer</span>
<HeaderSocials/>
<a href="contact" className="btn">Hire Me</a>
<ScrollDown/>
  </div>
  <Shapes/>
 </section>
  )
};
