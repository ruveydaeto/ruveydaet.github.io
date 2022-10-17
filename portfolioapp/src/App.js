import './App.css';
import './App.css';
import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/testimonials';
import Blog from './components/blog/Blog';
import Pricing from './components/pricing/Pricing';
function App() {
  return (
<>
<Sidebar/>
<main className='main'>
<Home/>
<About/>
<Services/>
<Resume/>
<Portfolio/>
<Contact/>
<Testimonials/>
<Blog/>
<Pricing/>

</main>
</>
  );
}

export default App;