import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <header id="site_header" className="header mobile-menu-hide">
        <div className="header-content">
            <div className="site-title-block mobile-hidden">
                <div className="site-title">John <span>Doe</span></div>
            </div>

            {/* Navigation */}
            <div className="site-nav">
                {/* Main menu */}
                <ul id="nav" className="site-main-menu">
                    <li className="active">
                        <a className="pt-trigger" href="#home" data-animation="62">Home</a>{/*href value = data-id without # of .pt-page. */}
                    </li>
                    <li className="">
                        <a className="pt-trigger" href="#resume" data-animation="62">Resume</a>
                    </li>
                    <li className="">
                        <a className="pt-trigger" href="#services" data-animation="62">Services</a>
                    </li>
                    <li className="">
                        <a className="pt-trigger" href="#blog" data-animation="62">Blog</a>
                    </li>
                    <li className="">
                        <a className="pt-trigger" href="#contact" data-animation="62">Contact</a>
                    </li>
                </ul>
                {/*Main menu */}
            </div>
            {/*Navigation */}
        </div>
    </header>
      );
    }
  }
  
  export default Header;
  