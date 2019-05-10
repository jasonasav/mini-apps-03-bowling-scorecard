import React, { Component } from 'react';
import Scoreinput from './scoreinput.jsx'

class Checkout extends Component {
  constructor(props) {
      super(props);
      this.state = {
        view: 'frameOne',
          
      };
      
  };


  render() {
      return (
      
        <div>
            <h1>Hackerrr Bowling!</h1>
            <Scoreinput />
        </div>
        
      )
  };
};

export default Checkout;
