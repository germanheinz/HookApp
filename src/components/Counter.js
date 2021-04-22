import React, { useState } from 'react';
import './counter.css';

export const Counter = () => {

    const [state, setState] = useState({
        counter1: 0,
        counter2: 10
    });
    
    const { counter1, counter2 } = state;

    return (
        <>
          <h1> Counter { counter1 }</h1>
          
          <h1> Counter { counter2 }</h1>

          <button className="btn btn-primary" 
                onClick={ () => {
                    setState({
                        ...state,
                        counter1: counter1 + 1,
                    })
                }}>
            +1    
          </button>  

          
          <button className="btn btn-primary" 
                onClick={ () => {
                    setState({
                        ...state,
                        counter2: counter2 + 5,
                    })
                }}>
            +2    
          </button>  
        </>
    )
    
}
