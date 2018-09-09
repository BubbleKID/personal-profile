import React, { Component } from 'react';


class Home extends Component {
    render() {
      return (
       <section>
          <div className="pt-page pt-page-current">
            <div className="section-inner start-page-content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div className="photo">
                                    <img src="../images/photo.png" alt=""></img>
                                </div>
                            </div>

                            <div className="col-sm-8 col-md-8 col-lg-8">
                                <div className="title-block">
                                    <h1>John Doe</h1>
                                    <div className="owl-carousel text-rotation owl-loaded owl-drag">
                                          <div className="owl-stage-outer">
                                              <div className="owl-stage">
                                                  <div className="owl-item cloned">
                                                      <div className="item">
                                                          <div className="sp-subtitle">Web Designer</div>
                                                      </div>
                                                  </div>
                                                  <div className="owl-item cloned">
                                                      <div className="item">
                                                          <div className="sp-subtitle">Frontend-developer</div>
                                                      </div>
                                                  </div><div className="owl-item active" >
                                                      <div className="item">
                                                          <div className="sp-subtitle">Web Designer</div>
                                                      </div>
                                                  </div>
                                                  <div className="owl-item" >
                                                      <div className="item">
                                                          <div className="sp-subtitle">Frontend-developer</div>
                                                      </div>
                                                  </div>
                                                  <div className="owl-item cloned" >
                                                      <div className="item">
                                                          <div className="sp-subtitle">Web Designer</div>
                                                      </div>
                                                  </div>
                                                  <div className="owl-item cloned" >
                                                      <div className="item">
                                                          <div className="sp-subtitle">Frontend-developer</div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="owl-nav disabled">
                                              <div className="owl-prev">prev</div>
                                              <div className="owl-next">next</div>
                                          </div>
                                          <div className="owl-dots disabled">
                                          </div>
                                      </div>
                                  </div>

                                <div className="social-links">
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
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
                                    <p>Hello! I’m John Doe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6 col-lg-6">
                                <ul className="info-list">
                                    <li><span className="title">Age</span><span className="value">29</span></li>
                                    <li><span className="title">Residence</span><span className="value">Australia</span></li>
                                    <li><span className="title">Address</span><span className="value">Level 3 / 57 Coronation Drive, Brisbane</span></li>
                                    <li><span className="title">e-mail</span><span className="value"><a href="mailto:email@example.com">info@jiangren.com.au</a></span></li>
                                    <li><span className="title">Phone</span><span className="value">+0123 123 456 789</span></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
          </div> 
       </section>
      );
    }
  }
  
  export default Home;
  