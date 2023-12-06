import React from 'react'
import "./Contact.css"
import Footer from '../../components/footer/Footer'

const Contact = () => {
  return (
    <>
      <div className='contact-container'>
        <div className="left">
          <h2>Get In Touch</h2>

          <div className="form-box">
            <form action="">
              <div className="form-group">
                <h3>Name</h3>
                <input type="text" name="" placeholder='Enter Your Name' />
              </div>
              <div className="form-group">
                <h3>Email</h3>
                <input type="text" name="" placeholder='Enter Your Email' />
              </div>
              <div className="form-group">
                <h3>Text Message</h3>
                <textarea type="text" name="" id="" cols="20" rows="5" placeholder='Enter Your Message'></textarea>
              </div>
              <button className='contact-btn'>Submit Form</button>
            </form>
          </div>
        </div>
        <div className="right">
          right side
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact