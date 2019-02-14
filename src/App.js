import React, { Component } from 'react';
import Collection from './components/Collection/Collection';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      forcast:[
        { id: 1, day: 'Mon', highestTemp: 20, lowestTemp: 10 , active: true},
        { id: 2, day: 'Tue', highestTemp: 30, lowestTemp: 20, active: false },
        { id: 3, day: 'Wed', highestTemp: 40, lowestTemp: 30, active: false},
        { id: 4, day: 'Thu', highestTemp: 50, lowestTemp: 40, active: false },
        { id: 5, day: 'Fri', highestTemp: 60, lowestTemp: 50, active: false }
      ]
    }
  }
  hourlyForcast= id =>{
    console.log(id);
  }
  render() {
    return (
      <div className="App">
        <Collection forcast={this.state.forcast} hourlyForcast={this.hourlyForcast}/>
      </div>
    );
  }
}

export default App;
