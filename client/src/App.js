import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
    console.log('constructor runs');
  }

  componentDidMount() {
    console.log("cDM mounted");
    axios.get(`http://localhost:5000/api/players`)
      .then(results => {
        this.setState({
          players: results.data
        })
      });
  }
  render() {
    return (
      <div className="App">
      <h1>Lambda School Advanced React Sprint</h1>
      <div className="PlayerCard" id="players"> 
        {this.state.players.map(player => 
          <h2>Name: {player.name}<br/>
          Country: {player.country}<br/>
          Searches: {player.searches}
          </h2>
          )}
      </div>
      </div>
    );
  }
}

export default App;
