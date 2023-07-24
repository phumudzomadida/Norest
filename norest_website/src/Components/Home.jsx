import React from 'react';
import './Home.css';

function Home() {
  //on click home button
  const goToAbout = () =>{
    const aboutSection = document.getElementById('about'); // dcroll to about page by getting its id documnet
    aboutSection.scrollIntoView({ behavior: 'smooth' });// smooth transition
  }
  return (
    <div className='home-container' id='home'>
        <div className='contents'>
            <p className='welcome-text'>The Art of House Painting Perfected.</p>
            <button className='about-norest'
             onClick={goToAbout}
            >
              ABOUT
            </button>
        </div>
    </div>
  )
}

export default Home