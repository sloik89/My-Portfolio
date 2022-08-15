import React from 'react'
import '../css/contact.css'
import Form from './Form'
import phone from '../assets/phone.svg'
import TitleRotate from './TitleRotate'
import place from '../assets/Place.svg'
import email from '../assets/Email.svg'

const Contact = () => {
  return (
    <section className="contact">
        <div className="section-center">
        <TitleRotate title='Contact'/>
        <div className="contact-wrapper">
            <h1 className="contact-wrapper-title">
                Let's <span className="contact-span">talk</span>  
            </h1>
            <div className="contact-wrapper-circle">
            </div>
            <div className="form-wrapper">
                <div className="form-intro">
                    <h3>Contact information</h3>
                    <p>Fill up the form and I will get back to you within 24 hours</p>
                    <div className="form-intro-info">
                        <p>
                           <img src={phone} alt="" />
                            725 133 234 
                        </p>
                        <p>
                           <img src={place} alt="" /> Rzeszow Grabskiego
                        </p>
                        <p>
                            <img src={email} alt="" /> sloik89@gmail.com
                        </p>
                        
                    </div>
                </div>
                <Form/>
            </div>

        </div>
         </div>
    </section>
  )
}

export default Contact