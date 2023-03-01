import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
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
        {
          this.state.users.filter((value) => {
            return value.name.toLowerCase().includes(this.state.filterData)
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

export default App;

