import React from 'react'
import Grides from '../../components/Grides/Grides'
import { Link } from 'react-router-dom';
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className='containerStyle'>
      <div className='textStyle'>
        <h1>Meet new Partner</h1>
        <p>Master any language by actually chatting with real people</p>
      </div>
      <div className='bottomTextStyle'>
      <Link to="/app" style={{ color: '#555', textDecoration: 'none', border: '1px solid ', borderRadius: '2px', height: '60px', width: '200px', display: 'inline-block', lineHeight: '60px' }}>
          Join us 
        </Link>
      </div>
      
    </div>
        <Grides/>
    </div>
  )
}

export default Main;