import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState,useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet';

const Contact = () => {
    
    const[letterClass,setLetterClass] = useState('text-animate');

    const refForm = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      return setLetterClass('text-animate-hover');
    },5000)
  },[])

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs
    .sendForm(
        'gmail',
        'template_q4dt1ha', //Template id
        refForm.current,
        'i64BwlkjpcRVJmxBL'
    )
    .then(
        ()=>{
            alert('Message succesfully sent!');
            window.location.reload(false);
        },
        ()=>{
            alert('Failed to send the message, please try again')
        }
    )
  }

  return (
    <div className='container contact-page'>
        <div className="text-zone">
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','M','e','.']} idx={15}  />     
                </h1>
                <p>
                    I am interested in freelance opportunities - I like to work on different tech-stacks. However, if you have other requests or questions, don't hesitate to contact me using the below form either.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                        <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
                    </ul>
                </form>
                </div>
        </div>
        <div className="info-map">
          Ridhiman Dhariwal,
          <br />
          India
          <br />
          K.J Somaiya College <br />
          Mumbai <br />
          <span>ridhiman.d@somaiya.edu</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={[19.0735074,72.8973512]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[19.0735074,72.8973512]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
        </div>
      <Loader type='pacman'/>
    </div>
  )
}

export default Contact;
