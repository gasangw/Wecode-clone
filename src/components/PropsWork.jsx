import React, { Component } from 'react'

export default class PropsWork extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
  render() {
    return (
      <div className='content'>
        {
          this.props.Info.filter((value) => {
            return value.name.toLowerCase().includes(this.props.inptval)
          }).map((data) => {
            return (
              <div key={data.id} className='data'>
               <div className='card bg-dark'>
                  <h3><span>Name:</span> {data.name}</h3>
                  <p><span>Email:</span> {data.email}</p>
               </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
