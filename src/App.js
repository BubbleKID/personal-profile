import React, { Component } from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import 'normalize.css'; 
import './css/style.css';


class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <Main />      
      </div>
      
      
    );
  }
}

export default App;
