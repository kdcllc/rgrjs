import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main'

import Rely from 'react-relay';

ReactDOM.render(<Main/>, document.getElementById('react'));

console.log(
    
    Relay.QL `
    query Test {
       links {   
		  title 
      }
    }
    `
    
);