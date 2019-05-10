import React, { Component } from 'react';
import Scoreinput from './scoreinput.jsx'

class Scorecard extends Component {
  constructor(props) {
      super(props);
      this.state = {
        frameOne: [],
        frameTwo: [],
        frameThree: [],
        frameFour: [],
        frameFive:[],
        frameSix:[],
        frameSeveon:[],
        frameEight:[],
        frameNine:[],
        frame10:[],
        totaleScore:[],
          
      };
      
  };


  render() {
      return (
      
        <div>
            <h2>ScoreCard Bowling!</h2>
        </div>
        
      )
  };
};

export default Scorecard;