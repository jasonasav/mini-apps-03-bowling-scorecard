import React, { Component } from 'react';
import Scoreinput from './scoreinput.jsx';
import Frame from './frame.jsx';
import Totalscore from './totalescore.jsx';


class Scorecard extends Component {
  constructor(props) {
      super(props);
      this.state = {
        frameOne: [1, 2],
        frameTwo: [10, 0],
        frameThree: [3, 4],
        frameFour: [0, 9],
        frameFive:[1, 2],
        frameSix:[4, 6],
        frameSeven:[2, 6],
        frameEight:[3, 0],
        frameNine:[6, 0],
        frameTen:[7, 2],
        totaleScore:[67],
          
      };
      
  };


  render() {
      return (
      
        <div>
            <h2>ScoreCard Bowling!</h2>
            <div>
              <span><Frame key="frameOne" score={this.state.frameOne}/></span> 
              <span><Frame key="frameTwo" score={this.state.frameTwo}/></span> 
              <span><Frame key="frameThree" score={this.state.frameThree}/></span> 
              <span><Frame key="frameFour" score={this.state.frameFour}/></span> 
              <span><Frame key="frameFive" score={this.state.frameFive}/></span> 
              <span><Frame key="frameSix" score={this.state.frameSix}/></span> 
              <span><Frame key="frameSeven" score={this.state.frameSeven}/></span> 
              <span><Frame key="frameEight" score={this.state.frameEight}/></span> 
              <span><Frame key="frameNine" score={this.state.frameNine}/></span> 
              <span><Frame key="frameTen" score={this.state.frameTen}/></span> 
              <span><Totalscore key="final-score" final={this.state.totaleScore} /></span>
            </div>
            
        </div>
        
      )
  };
};

export default Scorecard;