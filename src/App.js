import React, { Component } from 'react';
import Collection from './components/Collection/Collection';
import returnedData from './FormatData';

/* STUFF TO DO 
-popravi malo css
-ugradi rute
-pokusaj stavit vx(oj Boze)
*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forcast: []
    }
  }
  //call the api and get 5 day/3 hour forcast
  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Zenica,ba&units=metric&appid=a68987c5b03a0c8ce52ac5e15514eb33`)
      .then(response => {
        return response.json()
      })
      .then(JSONData => {
        this.setState({
          forcast: returnedData(JSONData)
        })
      })
  }

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
