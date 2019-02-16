import React, { Component } from 'react';
import Collection from './components/Collection/Collection';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      forcast:[
        { id: 1, day: 'Mon', highestTemp: 20, lowestTemp: 10 , active: true, hours:[11,33,40,14,15]},
        { id: 2, day: 'Tue', highestTemp: 30, lowestTemp: 20, active: false, hours:[12,33,40,14,15] },
        { id: 3, day: 'Wed', highestTemp: 40, lowestTemp: 30, active: false, hours:[13,33,40,14,15]},
        { id: 4, day: 'Thu', highestTemp: 50, lowestTemp: 40, active: false, hours:[14,33,40,14,15] },
        { id: 5, day: 'Fri', highestTemp: 60, lowestTemp: 50, active: false, hours:[15,33,40,14,15] }
      ]
    }
  }
  //call the api and get 5 day/3 hour forcast
  APICall = async () => {
    const API_KEY= 'a68987c5b03a0c8ce52ac5e15514eb33';
    const data = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&appid=a68987c5b03a0c8ce52ac5e15514eb33')

  }
  //changes the active state of the component that renders the hourly forcast
  hourlyForcast= id =>{
    const newForcast= this.state.forcast.map( day =>{
      if(day.id === id){
        day.active = !day.active;
      }
      return day;
    })
    this.setState({
      forcast: newForcast
    })
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
