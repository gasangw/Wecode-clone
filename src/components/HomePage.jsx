import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './HomePage.css'
class HomePage extends Component {
  render() {
    return (
      <Card className='cont'>
        <div className='para'>
            <p className='paragra'>Preparing the next generation</p>
            <p className='paragra'>of women IT-experts</p>
            <p className='paragra'>in Rwanda</p>
            <button className='btn btn-danger'>APPLY NOW</button>
        </div>
      </Card>
    )
  }
}

export default HomePage
