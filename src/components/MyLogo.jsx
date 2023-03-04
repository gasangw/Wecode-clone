import React, { Component } from 'react';
import entire from './imgs/entire-logo.png';
import './MyLogo.css';
import ICT from './imgs/ict.png'

export default class MyLogo extends Component {
  render() {
    return (
      <div>
        <p className='logo-title'>PARTNERS</p>
        <div className='logoSec'>
        <img src={entire} alt='group-of-logos' className='img-logo'/>
        <img src={ICT} alt='group-of-logos' className='logo2'/>
        </div>
      </div>
    )
  }
}
