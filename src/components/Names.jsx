// import '../App'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropsWork from './PropsWork'

class Names extends Component {
  constructor(){
    super()

    this.state = {
      users:  [],
      isloading: true,
      filterData: '',

    }
    // console.log(typeof(this.state.filterData))
  }
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(nameList => {
        console.log(nameList)
          this.setState({ users: nameList, isloading: false });
      })
    }
  render() {
    if(this.state.isloading){
        return <h1>Loading...</h1>
    }
    return (
      <div className='container'>
        <h1 className='title'>Search for someone</h1>
        <input type='text' onChange={(e) => this.setState({filterData: e.target.value.toLocaleLowerCase()}) } placeholder='what are you searching for' />
        <div className='content'>
         <PropsWork Info={this.state.users}  inptval={this.state.filterData}/>
        </div>
      </div>
    )
  }
}

export default Names;

