import React, { useEffect, useState } from 'react'
import LogoTitle from "../../Assets/Images/logo-s.png"
import {Link} from 'react-router-dom';
import "./index.scss"
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {

  const[letterClass,setLetterClass] = useState('text-animate');
  const nameArray = ['R','i','d','h','i','m','a','n'];
  const jobArray = ['E','v','e','r','y','t','h','i','n','g',' ','D','e','v','e','l','o','p','e','r','.'];

  useEffect(()=>{
    setTimeout(()=>{
      return setLetterClass('text-animate-hover');
    },5000)
  },[])

  return (
    <div className='container home-page'>
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,
          </span>
        {/* Hi,  */}
        <br />
        <span className={`${letterClass} _13`}>I</span> 
         <span className={`${letterClass} _14`}>'m</span>
        {/* I'm */}
        <img src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass}strArray={nameArray} idx={15}/>
        {/* Ridhiman  */}
        <br />
        <AnimatedLetters letterClass={letterClass}strArray={jobArray} idx={23}/>
        {/* Everything Developer  */}
        😎👨‍💻
        </h1>
        <h2>
            Web Developer-MERN STACK / Flask / ML / Deep Learning
        </h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo/>
      <Loader type='pacman'/>
    </div>
  )
}

export default Home;
