import React, { Component } from 'react';
import Collection from './components/Collection/Collection';
import returnedData from './FormatData';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HourlyForcast from './components/HourlyForcast/HourlyForcast';
import './App.css'

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

  //renders the component with the Route component tag
  MyCollection = (props) => {
    return (
      <Collection
        forcast={this.state.forcast}
        hourlyForcast={this.hourlyForcast}
        {...props}
      />
    )
  }
  MyHourlyForcast = (props) => {
    return (
      <HourlyForcast
        forcast={this.state.forcast}
        {...props}
      />
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>My Weather App</h1>
          <Switch>
            <Route exact path='/' render={this.MyCollection} />
            <Route path='/:day_id' render={this.MyHourlyForcast} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
