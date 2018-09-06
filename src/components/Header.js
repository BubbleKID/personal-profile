import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <header id="site_header" class="header mobile-menu-hide">
        <div class="header-content">
            <div class="site-title-block mobile-hidden">
                <div class="site-title">John <span>Doe</span></div>
            </div>

            {/* Navigation */}
            <div class="site-nav">
                {/* Main menu */}
                <ul id="nav" class="site-main-menu">
                    <li class="active">
                        <a class="pt-trigger" href="#home" data-animation="62">Home</a>{/*href value = data-id without # of .pt-page. */}
                    </li>
                    <li class="">
                        <a class="pt-trigger" href="#resume" data-animation="62">Resume</a>
                    </li>
                    <li class="">
                        <a class="pt-trigger" href="#services" data-animation="62">Services</a>
                    </li>
                    <li class="">
                        <a class="pt-trigger" href="#blog" data-animation="62">Blog</a>
                    </li>
                    <li class="">
                        <a class="pt-trigger" href="#contact" data-animation="62">Contact</a>
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
  