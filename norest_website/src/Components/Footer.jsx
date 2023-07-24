import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-column'></div>
        <div className='footer-column'>
            <h2>Contact Me</h2>
            <li> Whatsapp 071 253 6642 </li>
            <li>email: Mbedzinorest.306@gmail.com</li>
            <li>Cape Town</li>
            <li>call: 071 253 6642</li>
        </div>
        <div className='footer-column'>
            <h2>Leave message</h2>
            <label>
                <input className='contacting-email' type='email' placeholder='Enter email' />
                <br/>
                <input className='message-to-me' type='text' placeholder='leave a note i will recieve it' />
                <button className='contact-me'>Send</button>
            </label>
        </div>
    </div>
  )
}

export default Footer;