import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <body>
        
        <Header />
        <Home />
        <Footer />
      </body>
      
    );
  }
}

export default App;
