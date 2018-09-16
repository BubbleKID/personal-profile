import React, { Component } from 'react';

import Home from './Home';
class Main extends Component {
    render() {
      return (
        <div id="main" className="site-main">
            <div className="pt-wrapper">
                <div className="subpages">
                    <Home />
                </div>
            </div>

        </div>
      );
    }
  }
  
  export default Main;
  