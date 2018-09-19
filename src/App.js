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
    var currentPage = document.querySelector('#section_' + document.querySelector('.active>a').id);

    console.log( currentPage.id);
    var nextPage= document.querySelector('#section_'+ e.target.id);    
    var sectionName='section_'+ e.target.id;

    if(currentPage.id !== sectionName)
    {
      //current page left out
      currentPage.classList.add('pt-page-rotateCarouselLeftOut');     
      currentPage.addEventListener("animationend",     
        function() {                 
          currentPage.classList.remove('pt-page-rotateCarouselLeftOut');                 
        }); 
        //next page left in
        nextPage.classList.add('pt-page-current'); 
        nextPage.classList.add('pt-page-rotateCarouselLeftIn'); 
        nextPage.addEventListener("animationend",
        function() {    
          nextPage.classList.remove('pt-page-rotateCarouselLeftIn');
        });

        //active menu button
        document.querySelector('.active').classList.remove('active');
        console.log( currentPage.id);
        currentPage.classList.remove('pt-page-current');
        e.target.parentElement.classList.add('active');
        
    }             
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll(e) {
    if (document.documentElement.scrollTop < 20) {
      document.querySelector('.header').classList.remove('sticked');
    } else {
      document.querySelector('.header').classList.add('sticked');
    }    
    //console.log('this scroll top' + window.scrollTop );
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
        <Footer /> 
      </div>       
    );
  }
}

export default App;
