import React, { Component } from 'react';

class Service extends Component {
    render() {
      return (
        <section className="pt-page pt-page-current" data-id="services">
        <div className="section-inner custom-page-content">
          <div className="page-header color-1">
            <h2>Services</h2>
          </div>
          <div className="page-content">
            {/* <!-- My Services --> */}
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="block-title">
                  <h3>My <span>Services</span></h3>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="service-block">
                  <div className="service-info">
                    {/* <!--<i className="service-icon fa fa-shopping-cart"></i>--> */}
                    <div className="service-image">
                      <img src="images/service/web_design_icon.png" alt="Responsive Design" className="mCS_img_loaded"></img>
                    </div>
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="service-block">
                  <div className="service-info">
                    <div className="service-image">
                      <img src="images/service/photography_icon.png" alt="Photography" className="mCS_img_loaded"></img>
                    </div>
                    <h4>Photography</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="service-block">
                  <div className="service-info">
                    <div className="service-image">
                      <img src="images/service/creativity_icon.png" alt="Creativity" className="mCS_img_loaded"></img>
                    </div>
                    <h4>Management</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="service-block">
                  <div className="service-info">
                    <div className="service-image">
                      <img src="images/service/advertising_icon.png" alt="Advertising" className="mCS_img_loaded"></img>
                    </div>
                    <h4>Advertising</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of My Services --> */}

            {/* <!-- Clients --> */}
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="block-title">
                  <h3>Clients</h3>
                </div>

                <div className="col-sm-4 col-md-2 subpage-block">
                  <div className="client-block">
                    <a href="#" target="_blank"><img src="images/clients/client_1.png" alt="image" className="mCS_img_loaded"></img></a>
                  </div>
                </div>

                <div className="col-sm-4 col-md-2 subpage-block">
                  <div className="client-block">
                    <a href="#" target="_blank"><img src="images/clients/client_2.png" alt="image" className="mCS_img_loaded"></img></a>
                  </div>
                </div>

                <div className="col-sm-4 col-md-2 subpage-block">
                  <div className="client-block">
                    <a href="#" target="_blank"><img src="images/clients/client_3.png" alt="image" className="mCS_img_loaded"></img></a>
                  </div>
                </div>

                <div className="col-sm-4 col-md-2 subpage-block">
                  <div className="client-block">
                    <a href="#" target="_blank"><img src="images/clients/client_4.png" alt="image" className="mCS_img_loaded"></img></a>
                  </div>
                </div>

                <div className="col-sm-4 col-md-2 subpage-block">
                  <div className="client-block">
                    <a href="#" target="_blank"><img src="images/clients/client_5.png" alt="image" className="mCS_img_loaded"></img></a>
                  </div>
                </div>

                <div className="col-sm-4 col-md-2 subpage-block">
                  <div className="client-block">
                    <a href="#" target="_blank"><img src="images/clients/client_6.png" alt="image" className="mCS_img_loaded"></img></a>
                  </div>
                </div>

              </div>
            </div>
            {/* <!-- End of Clients --> */}

          </div>
        </div>
      </section>
      );
    }
  }
  
  export default Service 
  