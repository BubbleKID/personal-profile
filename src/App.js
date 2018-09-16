import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './css/animation.css';

import './css/style.css';

class App extends Component {
  onClickPage = (e) =>{
    //curretn page comes out
    var currentPage = document.querySelector('.pt-page-current');
    var nextPage= document.querySelector('#section_'+ e.target.id );    
    var sectionName='section_'+ e.target.id;

    if(currentPage.id !== sectionName)
    {
      //current page left out
      currentPage.classList.add('pt-page-rotateCarouselLeftOut');
      currentPage.classList.remove('pt-page-current');
      currentPage.addEventListener("animationend",
        function() {
          console.log('current id ' + document.querySelector('.pt-page-current').id);
          currentPage.classList.remove('pt-page-rotateCarouselLeftOut');
        });
      //next page left in
      nextPage.classList.add('pt-page-current');
      nextPage.classList.add('pt-page-rotateCarouselLeftIn');
      nextPage.addEventListener("animationend",
        function() {
          nextPage.classList.remove('pt-page-rotateCarouselLeftIn');
        });
      
    }             
  }


  render() {
    return (
      <div className="page">
        <Header onClickPage={this.onClickPage} />
        <div id="main" className="site-main">
            <div className="pt-wrapper">
                <div className="subpages">
                    <Home />
                    <Resume />
                    <Services />
                    <Blog />
                    <Contact />
                </div>
            </div>
        </div>    
      </div>
      
      
    );
  }
}

export default App;
