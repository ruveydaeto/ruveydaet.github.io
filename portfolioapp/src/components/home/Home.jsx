import React from 'react';
import "./home.css";
import Me from "../../assets/ruveyda.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from "./ScrollDown";
import Shapes from './Shapes';
export default function Home() {
  return (
 <section className="home container" id='home'>
  <div className="intro">
    <img src={Me} alt='' className='home__img'/>
<h1 className='home__name'>Ruveyda Eto </h1>
<span className='home__education'>Hi, I'am a Web Developer</span>
<HeaderSocials/>
<a href="#contact" className="btn__home">Hire Me</a>
<ScrollDown/>
  </div>
  <Shapes/>
 </section>
  )
};
