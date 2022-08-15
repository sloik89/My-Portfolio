import React from 'react'
import './form.css'
import envelope from '../../assets/envelope.svg'
import letter from '../../assets/letter.svg'
import Header from '../HeaderOpacity/Header'
const Form = () => {
  return (
   <section className="form" id="form">
        <div className="section-center form-center">
            <Header header='contact'/>
            <div className="form-container">
                <h2 className="header-main contact-header">Let's <span className='contact-accent'>talk</span>
                </h2>
                <div className="form-wrapper">
                    
                <form action="#" className='form-inputs'>
                    <div className="form-row">
                        <input type="text" id='name-form' className='form-input' required />
                        <label htmlFor="name-form">Your name</label>
                    </div>
                    <div className="form-row">
                        <input type="text" id='email-form' className='form-input' required />
                        <label htmlFor="email-form">Your email</label>
                    </div>
                    <div className="form-row">
                        <textarea id='form-message' className='textara-form' required></textarea>
                        <label htmlFor="form-message">Your message</label>
                    </div>
                    <button className='form-btn'>Send</button>
                </form>
                <div className="form-envelope-img">
                        <img src={letter} alt="" />
                    </div>
            </div>
            </div>
            
        </div>
   </section>
  )
}

export default Form