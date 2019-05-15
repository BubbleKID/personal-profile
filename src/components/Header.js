import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { onClickPage } = props;

  return (
    <header id="site_header" className="header mobile-menu-hide">
      <div className="header-content">
        <div className="site-title-block mobile-hidden">
          <div className="site-title">
            <span>Xin</span> Chen
          </div>
        </div>
        {/* Navigation */}
        <div className="site-nav">
          {/* Main menu */}
          <ul id="nav" className="site-main-menu">
            <li className="active">
              <a
                className="pt-trigger"
                href="#home"
                onClick={onClickPage}
                id="home"
              >
                Home
              </a>
              {/* href value = data-id without # of .pt-page. */}
            </li>
            <li className="">
              <a
                className="pt-trigger"
                href="#resume"
                onClick={onClickPage}
                id="resume"
              >
                Resume
              </a>
            </li>
            {/* <li className="">
                        <a className="pt-trigger" href="#services" onClick={this.props.onClickPage} id="services">Services</a>
                    </li> */}
            <li className="">
              <a
                className="pt-trigger"
                href="#blog"
                onClick={onClickPage}
                id="blog"
              >
                Blog
              </a>
            </li>
            <li className="">
              <a
                className="pt-trigger"
                href="#contact"
                onClick={onClickPage}
                id="contact"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Main menu */}
        </div>
        {/* Navigation */}
      </div>
    </header>
  );
};

Header.propTypes = {
  onClickPage: PropTypes.func.isRequired,
};

export default Header;
