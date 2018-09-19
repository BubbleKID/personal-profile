import React, { Component } from 'react';
import photo from '../images/photo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/owl.carousel.js';
import 'owl.carousel/dist/assets/owl.carousel.css';


window.jQuery = $;
window.$ = $;
global.jQuery = $;

class Home extends Component {
    render() {      
      return (
        <section className="pt-page pt-page-current" id="section_home">
        <div className="section-inner start-page-content">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className="photo">
                                <img src={photo} alt="a"></img>
                            </div>
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="title-block">
                                <h1>Xin Chen</h1>
                                <OwlCarousel className="owl-carousel text-rotation owl-theme "
                                    loop={ true }
                                    dots={ false }
                                    nav={ false }
                                    margin={ 0 }
                                    items={ 1 }
                                    autoplay={ true }
                                    autoplayHoverPause={ false }
                                    autoplayTimeout={ 3800 }
                                    //animateOut={ 'zoomOut' }
                                    //animateIn={ 'zoomIn' }
                                >
                                    <div className="item">
                                        <div className="sp-subtitle">PHP Developer</div>
                                    </div>
                                    <div className="item">
                                        <div className="sp-subtitle">Frontend-developer</div>
                                    </div>
                                </OwlCarousel>
                            </div>   
                            <div className="social-links">
                                <a href=""><i className="fa fa-twitter"></i></a>
                                <a href=""><i className="fa fa-facebook"></i></a>
                                <a href=""><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-content">
                    <div className="row">

                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="about-me">
                                <div className="block-title">
                                    <h3>About <span>Me</span></h3>
                                </div>
                                <p>Hello! I’m Xin Chen.I am a Front End Developer living in Melbourne</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <ul className="info-list">                                
                                <li><span className="title">Residence</span><span className="value">Australia</span></li>
                                <li><span className="title">Address</span><span className="value">Blackburn, VIC</span></li>
                                <li><span className="title">e-mail</span><span className="value"><a href="mailto:email@example.com">fqchenxin@gmail.com</a></span></li>                               
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section> 
      );
    }
  }
  
  export default Home;
  