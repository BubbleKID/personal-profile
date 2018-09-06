import React, { Component } from 'react';

class Service extends Component {
    render() {
      return (
        <section class="pt-page pt-page-current" data-id="services">
        <div class="section-inner custom-page-content">
          <div class="page-header color-1">
            <h2>Services</h2>
          </div>
          <div class="page-content">
            {/* <!-- My Services --> */}
            <div class="row">
              <div class="col-sm-12 col-md-12">
                <div class="block-title">
                  <h3>My <span>Services</span></h3>
                </div>
              </div>

              <div class="col-sm-6 col-md-3">
                <div class="service-block">
                  <div class="service-info">
                    {/* <!--<i class="service-icon fa fa-shopping-cart"></i>--> */}
                    <div class="service-image">
                      <img src="images/service/web_design_icon.png" alt="Responsive Design" class="mCS_img_loaded"></img>
                    </div>
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3">
                <div class="service-block">
                  <div class="service-info">
                    <div class="service-image">
                      <img src="images/service/photography_icon.png" alt="Photography" class="mCS_img_loaded"></img>
                    </div>
                    <h4>Photography</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3">
                <div class="service-block">
                  <div class="service-info">
                    <div class="service-image">
                      <img src="images/service/creativity_icon.png" alt="Creativity" class="mCS_img_loaded"></img>
                    </div>
                    <h4>Management</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-3">
                <div class="service-block">
                  <div class="service-info">
                    <div class="service-image">
                      <img src="images/service/advertising_icon.png" alt="Advertising" class="mCS_img_loaded"></img>
                    </div>
                    <h4>Advertising</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of My Services --> */}

            {/* <!-- Clients --> */}
            <div class="row">
              <div class="col-sm-12 col-md-12">
                <div class="block-title">
                  <h3>Clients</h3>
                </div>

                <div class="col-sm-4 col-md-2 subpage-block">
                  <div class="client-block">
                    <a href="#" target="_blank"><img src="images/clients/client_1.png" alt="image" class="mCS_img_loaded"></img></a>
                  </div>
                </div>

                <div class="col-sm-4 col-md-2 subpage-block">
                  <div class="client-block">
                    <a href="#" target="_blank"><img src="images/clients/client_2.png" alt="image" class="mCS_img_loaded"></img></a>
                  </div>
                </div>

                <div class="col-sm-4 col-md-2 subpage-block">
                  <div class="client-block">
                    <a href="#" target="_blank"><img src="images/clients/client_3.png" alt="image" class="mCS_img_loaded"></img></a>
                  </div>
                </div>

                <div class="col-sm-4 col-md-2 subpage-block">
                  <div class="client-block">
                    <a href="#" target="_blank"><img src="images/clients/client_4.png" alt="image" class="mCS_img_loaded"></img></a>
                  </div>
                </div>

                <div class="col-sm-4 col-md-2 subpage-block">
                  <div class="client-block">
                    <a href="#" target="_blank"><img src="images/clients/client_5.png" alt="image" class="mCS_img_loaded"></img></a>
                  </div>
                </div>

                <div class="col-sm-4 col-md-2 subpage-block">
                  <div class="client-block">
                    <a href="#" target="_blank"><img src="images/clients/client_6.png" alt="image" class="mCS_img_loaded"></img></a>
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
  