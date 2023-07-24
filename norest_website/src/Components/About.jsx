import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-container' id='about'>
        <div className='about-header'>
            <h1>About</h1>
        </div>
        <div className='blue-line'></div>
        <div className='inner-container'>
            <div className='norest-about-text'>
                <h3>Who is Norest</h3>
                <p>
                    Welcome, I'm Mbedzi Norest. My passion is painting and making sure your
                    vision comes real. 
                </p>
            </div>
            <div className='empty-div'></div>
            <div className='empty-div'></div>
            <div className='norest-about-image'></div>
            <div className='norest-hobbies'>
                <h3>Sports</h3>
                <ul>
                    <li>Football</li>
                </ul>
            </div>
            <div className='empty-div'></div> 
            <div className='empty-div'></div>   
            <div className='norest-about-text'>
                <h3>Goals</h3>
                <p>
                    My goal is making sure i deliver service in time, also taking care of my family.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About