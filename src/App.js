import React, { Component } from 'react';
import Collection from './components/Collection/Collection';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      forcast:[
        { day: 'Mon', highestTemp: 20, lowestTemp: 10 },
        { day: 'Tue', highestTemp: 30, lowestTemp: 20 },
        { day: 'Wed', highestTemp: 40, lowestTemp: 30 },
        { day: 'Thu', highestTemp: 50, lowestTemp: 40 },
        { day: 'Fri', highestTemp: 60, lowestTemp: 50 }
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
