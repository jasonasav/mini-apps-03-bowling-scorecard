import React, { Component } from 'react';




const Frame = ({score}) => (
      
    <div className="frame">
         <ul>
          {score.map(sc, i =>
              <li name='frame' key={i}  >
                  <div >{beg[0]}</div>
                  <div >{beg[1]}</div>
                  <div >{beg[0] + beg[1]}</div>
              </li>
          )}
          </ul>
        </div>
 
);      


export default Frame;



// onClick={(e) => props.handleClick(beg)}