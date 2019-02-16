import React, { Component } from 'react';
import Collection from './components/Collection/Collection';


/* STUFF TO DO 
-check for bugs
-fetch the 5 day data
*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forcast: [
        { id: 1, date: 17, day: 'Sun', highestTemp: 20, lowestTemp: 10, active: true, hours: [] },
        { id: 2, date: 18, day: 'Mon', highestTemp: 30, lowestTemp: 20, active: false, hours: [] },
        { id: 3, date: 19, day: 'Tue', highestTemp: 40, lowestTemp: 30, active: false, hours: [] },
        { id: 4, date: 20, day: 'Wed', highestTemp: 50, lowestTemp: 40, active: false, hours: [] },
        { id: 5, date: 21, day: 'Thu', highestTemp: 60, lowestTemp: 50, active: false, hours: [] }
      ]
    }
  }
  //call the api and get 5 day/3 hour forcast
  componentDidMount() {
    const API_KEY = 'a68987c5b03a0c8ce52ac5e15514eb33';
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Zenica,ba&units=metric&appid=${API_KEY}`)
      .then(response => {
        return response.json()
      })
      .then(JSONData => {
        const formatedData= this.formatData(JSONData);
        
        this.setState({
          forcast: this.storeHours(this.state.forcast, formatedData)
        })
      })
  }

  //goes through the JSONData and extracts the day of the forcast, hour and temp of that hour
  formatData= data =>{
    return data.list.map(item => {
      return {
        day: this.dayConverter(item.dt),
        hour: this.hourConverter(item.dt),
        temp: Math.floor(item.main.temp)
      }
    });
  }

  //goes through the state.forcast array and the hourcast array and returns an updated forcast array
  storeHours = (forecast, hourcast) => {
    const newForcast = forecast.map(ele => {
      let arr = [];
      hourcast.forEach(hr => {
        let obj = {
          hour: null,
          temp: null
        };
        //stores the hour and temp in an object
        if (hr.day === ele.date && hr.day != null) {
          obj.hour = hr.hour;
          obj.temp = hr.temp;
        }
        //removes the not used objects
        if (obj.hour != null && obj.temp != null) {
          arr.push(obj);
        }
      })
      //stores the array of hourcast objects in the individual forcast.hours
      ele.hours=arr;
      return ele;
    })
    return newForcast;
  }

  ///format the forcast date
  hourConverter = UNIX_timestamp => new Date(UNIX_timestamp * 1000).getHours();
  dayConverter = (UNIX_timestamp) => new Date(UNIX_timestamp * 1000).getDate();
 
  //changes the active state of the component that renders the hourly forcast
  hourlyForcast = id => {
    const newForcast = this.state.forcast.map(day => {
      if (day.id === id) {
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
        <Collection forcast={this.state.forcast} hourlyForcast={this.hourlyForcast} />
      </div>
    );
  }
}

export default App;
