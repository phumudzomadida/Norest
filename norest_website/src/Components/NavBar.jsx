import React from 'react';
import  './NavBar.css';
function NavBar() {
  //handle navigation
  const goToAbout = () =>{
    const aboutSection = document.getElementById('about'); // dcroll to about page by getting its id documnet
    aboutSection.scrollIntoView({ behavior: 'smooth' });// smooth transition
  }
  const goToHome = () =>{
    const aboutSection = document.getElementById('home'); // dcroll to about page by getting its id documnet
    aboutSection.scrollIntoView({ behavior: 'smooth' });// smooth transition
  }
  const goToService = () =>{
    const aboutSection = document.getElementById('service'); // dcroll to about page by getting its id documnet
    aboutSection.scrollIntoView({ behavior: 'smooth' });// smooth transition
  }

  return (
    <div className='nav-container'>
      <div className='nav-name'>
        <h1 className='header-text'>Norest</h1>
      </div>
      <div className='nav-options'>
        <li className='list-container'>
            <button className='list-item' onClick={goToHome}>Home</button>
            <button className='list-item' onClick={goToAbout}>About</button>
            <button className='list-item' onClick={goToService}>Services</button>
        </li>
      </div>
    </div>
  )
}

export default NavBar;
