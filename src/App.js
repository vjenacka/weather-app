import React, { Component } from 'react';
import Collection from './components/Collection/Collection';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      forcast:[
        { day: 'Mon', highestTemp: 10, lowestTemp: 20 },
        { day: 'Tue', highestTemp: 20, lowestTemp: 30 },
        { day: 'Wed', highestTemp: 30, lowestTemp: 40 },
        { day: 'Thu', highestTemp: 40, lowestTemp: 50 },
        { day: 'Fri', highestTemp: 50, lowestTemp: 60 }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Collection forcast={this.state.forcast} />
      </div>
    );
  }
}

export default App;
