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


function whichTransitionEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}
var transitionEvent = whichTransitionEvent();

class App extends Component {
  onClickPage = (e) =>{
    //curretn page comes out

    var currentPage = document.querySelector('.pt-page-current');
    var nextPage= document.querySelector('#section_'+ e.target.id );
    console.log('#section_'+ e.target.id)
    var sectionName='#section_'+ e.target.id;
    if(currentPage.id !== sectionName)
    {
      currentPage.classList.remove('pt-page-rotateCarouselLeftIn');
      currentPage.classList.add('pt-page-rotateCarouselLeftOut');
      currentPage.addEventListener("animationend",
        function() {
          currentPage.classList.remove('pt-page-current');
        });
      //next page comes in
      nextPage.classList.add('pt-page-rotateCarouselLeftIn');
      nextPage.classList.remove('pt-page-rotateCarouselLeftOut');
      nextPage.classList.add('pt-page-current');
      // nextPage.classList.add('pt-page-current');
      // nextPage.addEventListener("animationend",
      // function() {
      // });
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
