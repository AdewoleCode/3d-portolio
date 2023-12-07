import React, { useState, useRef, Suspense } from 'react'
import "./Contact.css"
import Footer from '../../components/footer/Footer'
// import emailjs from 'emailjs-com';
import { Canvas } from '@react-three/fiber';
import Spinner from '../../components/spinner/Spinner';
import Fox from '../../models/Fox';

// todo
// install react-toastify and emailjs
// configure emailjs
// add 3 landing pages you built to list of portfolio
// make all pages responsive across all devices
// host
// maybe revamp the about section. maybe.

const Contact = () => {
  const formRef = useRef();
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setIsloading(true)

  //   setCurrentAnimation('hit')

  //   emailjs.sendForm('service_wrvpji3', 'template_yverfmx', form.current, 'yZYjvSaCnhyflKnLl')
  //     .then((result) => {
  //       setIsloading(false)
  //       console.log(result.text);
  //       // use react toastify to show succes message
  //     }, (error) => {
  //       setIsloading(false)
  //       console.log(error.text);
  //       setCurrentAnimation('idle')
  //       // use react toastify to show succes message
  //     });
  //   e.target.reset();
  //   setTimeout(() => {
  //     setCurrentAnimation('idle')
  //   }, 3000);
  // };


  const [form, setform] = useState({ name: "", email: "", message: "" })
  const [isloading, setIsloading] = useState(false)

  const handleFormChange = (e) => {
    e.preventDefault()
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleFocus = () => {
    setCurrentAnimation('walk')
  }

  const handleBlur = () => {
    setCurrentAnimation('idle')
  }

  return (
    <>
      <div className='contact-container'>
        <div className="left">
          <h2>Get In Touch</h2>

          <div className="form-box">
            <form ref={formRef} >
              <div className="form-group">
                <h3>Name</h3>
                <input
                  type="text"
                  name="name"
                  placeholder='Enter Your Name'
                  value={form.name}
                  onChange={handleFormChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
              </div>
              <div className="form-group">
                <h3>Email</h3>
                <input
                  type="email"
                  name="email"
                  placeholder='Enter Your Email'
                  value={form.email}
                  onChange={handleFormChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
              </div>
              <div className="form-group">
                <h3>Text Message</h3>
                <textarea
                  value={form.message}
                  required
                  onChange={handleFormChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  type="text"
                  name="message"
                  cols="20" rows="5"
                  placeholder='Enter Your Message'></textarea>
              </div>
              <button
                onFocus={handleFocus}
                type='submit'
                className='contact-btn'
                disabled={isloading}
              >
                {isloading ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        <div className="right">
          <Canvas
            className
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000
            }}
          >
            <Suspense fallback={<Spinner />}>
              <directionalLight position={[0, 0, 1]} intensity={2.5} />
              <ambientLight intensity={0.6} />
              <Fox
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.7, 0.2]}
                scale={[1, 0.9, 0.8]}
                currentAnimation={currentAnimation}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact