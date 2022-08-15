import React from 'react'
import '../css/form.css'
const Form = () => {
  return (
    <form action="$" className='form'>
                    <div className="form-input">
                        <input 
                        type="text" 
                        name="name"
                        className="name" />
                        <label 
                        htmlFor="name"
                        className='label'
                        
                        >Name</label>
                    </div>
                    <div className="form-input">
                        <input type="text" className="email"
                        name='email'
                        
                        />
                        <label htmlFor="name" className='label'>Email</label>
                    </div>
                    <div className="form-textarea">
                        <textarea className='message' name="message" id=""></textarea>
                        <label htmlFor="message" className='label'>Message</label>
                    </div>
                    
                    
                    <button className="form-btn">Send</button>
                </form>
  )
}

export default Form