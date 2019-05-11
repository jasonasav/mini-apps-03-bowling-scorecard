import React, { Component } from 'react';





const Frame = ({score}) => (
    <div className="frame">
             <div>
          {score.map((sc, i) =>
                  <span name="frame" key={i} >{sc}    |   </span>
          )}
          </div>
          <div name='total'>Total:  {score[0] + score[1]}</div>
        </div>
 
);      


export default Frame;



// onClick={(e) => props.handleClick(beg)}