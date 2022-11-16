import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">
            Lets talk about Everything
          </h3>
          <p className="contact__left">
            Dont like forms? send me an email
          </p>
          </div>
          <form action="" className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input type="text" placeholder='Insert your name' className="contact__form-input" />
              </div>

              <div className="contact__form-div">
                <input type="email" placeholder='Insert your email' className="contact__form-input" />
              </div>
                  
            </div>
              <div className="contact__form-div">
                <input type="text" placeholder='Insert your subject' className="contact__form-input" />
              </div>
              
              <div className="contact__form-div ">
                <textarea name="" 
                placeholder='write your message'
                id="" 
                cols="30" 
                rows="10" 
                className="contact__form-input">

                </textarea>
              </div>

              <button className='btn'>Send Message</button>
          
          </form>
        </div>
 
    </section>
  )
}
