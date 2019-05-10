import React, { Component } from 'react';

class Scoreinput extends Component {
  constructor(props) {
      super(props);
      this.state = {
          scores: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          
      };
      
  };


  render() {
      return (
      
        <div>
        {this.state.scores.map(score =>
            <button value={score}>${score}</button>
        )}        
        </div>
        
      )
  };
};

export default Scoreinput;