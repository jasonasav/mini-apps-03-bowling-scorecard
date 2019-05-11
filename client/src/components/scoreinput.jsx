import React, { Component } from 'react';

class Scoreinput extends Component {
  constructor(props) {
      super(props);
      this.state = {
          scores: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          currentScore: 0,
          rollCount: 2,
          frame: 1,
      };
    this.setRemainingScores = this.setRemainingScores.bind(this)
      
  };

  componentDidMount() {
    this.setRemainingScores()
  }

  handleChange(e) {

  }

  setRemainingScores() {
  let rollCount = this.state.rollCount
  if (rollCount === 2) {
    this.setState({
        scores: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        currentScore: 0,
    })
  }
  if (rollCount === 1) {
    let score = 11 - this.state.currentScore;
    let fullScore = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var remainingScores = fullScore.splice(0, score)
    this.setState({
        scores: remainingScores,
        currentScore: 0,
    });
  }
  if (rollCount === 0) {
      var frame = this.state.frame + 1;
      this.setState({
      scores: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentScore: 0,
      rollCount: 2,
      frame: frame
    })
  } 
  }

//   handleSubmit(e) {
    
//     if (rollCount === 0) {
//       // set score card value function

//     }
//     // set score card value function
//     e.preventDefault();
//     if (e.target.value === 10) {          
//     }    
//   }

  render() {
      return (
        <div>
            <h2>Input your Score!</h2>
          {this.state.scores.map(score =>
            <button key={score} value={score}>{score}</button>
          )}        
        </div>
      )
  };
};

export default Scoreinput;