import React, { Component } from 'react';
import Collection from './components/Collection/Collection';


/* STUFF TO DO 
-split the code in to multiple functions
-try removing the full date and just make the time show
-check for bugs
-fetch the 5 day data
*/


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
      ],
      data: 'dummy data'
    }
  }
  //call the api and get 5 day/3 hour forcast
  componentDidMount(){
    const API_KEY= 'a68987c5b03a0c8ce52ac5e15514eb33';
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Zenica,ba&units=metric&appid=${API_KEY}`)
    .then(response =>{
      return response.json()
    })
    .then(JSONData =>{
      console.log(JSONData);
      //goes through the list and gets the date and the temp of the current time
      const formatedData = JSONData.list.map(item =>{
        return {
          day: this.dayConverter(item.dt),
          hour: this.hourConverter(item.dt),
          temp: item.main.temp
        }
      });
      console.log(formatedData);
      const wtf = this.state.forcast.map(ele =>{
        ele.hours=formatedData.slice(0,7);
        return ele;
      })
      this.setState({
        forcast:wtf
      })
    })
  }
  ///format data function
  hourConverter=(UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    return a.getHours();
  }
  dayConverter=(UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    return a.getDate();
  }
  //test function
  /* test = ()=>{

  } */
  //changes the active state of the component that renders the hourly forcast
  hourlyForcast= id =>{
    const newForcast= this.state.forcast.map( day =>{
      if(day.id === id){
        day.active = !day.active;
      }
      return day;
    })
    this.setState({
      ...this.state,
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
