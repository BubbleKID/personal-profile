import React from 'react';

const Contact = () => {
  return (
    <section className="pt-page" id="section_contact">
      <div className="section-inner custom-page-content">
        <div className="page-header color-1">
          <h2>Contact</h2>
        </div>
        <div className="page-content">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="block-title">
                <h3>
                  Get in <span>Touch</span>
                </h3>
              </div>

              <div className="contact-info-block">
                <div className="ci-icon">
                  <i className="fa fa-map-marker" />
                </div>
                <div className="ci-text">
                  <h5>Melbourne, Australia</h5>
                </div>
              </div>
              <div className="contact-info-block">
                <div className="ci-icon">
                  <i className="fa fa-envelope" />
                </div>
                <div className="ci-text">
                  <h5>fqchenxin@gmail.com</h5>
                </div>
              </div>
              <div className="contact-info-block">
                <div className="ci-icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="ci-text">
                  <h5>+123 654 78900</h5>
                </div>
              </div>
              <div className="contact-info-block">
                <div className="ci-icon">
                  <i className="fa fa-check" />
                </div>
                <div className="ci-text">
                  <h5>Freelance Available</h5>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div className="block-title">
                <h3>
                  Contact <span>Form</span>
                </h3>
              </div>
              <form
                id="contact-form"
                method="post"
                action="#"
                noValidate
              >
                <div className="messages" />

                <div className="controls">
                  <div className="form-group form-group-with-icon">
                    <i className="fa fa-user" />
                    <span>Full Name</span>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder=""
                      required="required"
                      data-error="Name is required."
                    />
                    <div className="form-control-border" />
                    <div className="help-block with-errors" />
                  </div>

                  <div className="form-group form-group-with-icon">
                    <i className="fa fa-envelope" />
                    <span>Email Address</span>
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder=""
                      required="required"
                      data-error="Valid email is required."
                    />
                    <div className="form-control-border" />
                    <div className="help-block with-errors" />
                  </div>

                  <div className="form-group form-group-with-icon">
                    <i className="fa fa-comment" />
                    <span>Message for Me</span>
                    <textarea
                      id="form_message"
                      name="message"
                      className="form-control"
                      placeholder=""
                      rows="4"
                      required="required"
                      data-error="Please, leave me a message."
                    />
                    <div className="form-control-border" />
                    <div className="help-block with-errors" />
                  </div>
                  <input
                    type="submit"
                    className="button btn-send disabled"
                    value="Send message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
