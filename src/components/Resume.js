import React, { Component } from 'react';

class Resume extends Component {
    render() {
      return (
        <section className="pt-page pt-page-current" data-id="resume">
        <div className="section-inner custom-page-content">
            <div className="page-header color-1">
                <h2>Resume</h2>
            </div>
            <div className="page-content">

                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="block">
                            <div className="block-title">
                                <h3>Education</h3>
                            </div>

                            <div className="timeline">
                                {/* <!-- Education 1 --> */}
                                <div className="timeline-item">
                                    <h4 className="item-title">Specialization Course</h4>
                                    <span className="item-period">2010</span>
                                    <span className="item-small">Apple Inc.</span>
                                    <p className="item-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                                </div>
                                {/* <!-- / Education 1 --> */}

                                {/* <!-- Education 2 --> */}
                                <div className="timeline-item">
                                    <h4 className="item-title">Specialization Course</h4>
                                    <span className="item-period">2010</span>
                                    <span className="item-small">Apple Inc.</span>
                                    <p className="item-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                                </div>
                                {/* <!-- / Education 2 --> */}

                                {/* <!-- Education 3 --> */}
                                <div className="timeline-item">
                                    <h4 className="item-title">Specialization Course</h4>
                                    <span className="item-period">2010</span>
                                    <span className="item-small">Apple Inc.</span>
                                    <p className="item-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                                </div>
                                {/* <!-- / Education 3 --> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="block">
                            <div className="block-title">
                                <h3>Experience</h3>
                            </div>

                            <div className="timeline">
                                {/* <!-- Experience 1 --> */}
                                <div className="timeline-item">
                                    <h4 className="item-title">Frontend-developer</h4>
                                    <span className="item-period">Dec 2012 - Current</span>
                                    <span className="item-small">Web Agency</span>
                                    <p className="item-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                                </div>
                                {/* <!-- / Experience 1 --> */}

                                {/* <!-- Experience 2 --> */}
                                <div className="timeline-item">
                                    <h4 className="item-title">Web Designer</h4>
                                    <span className="item-period">Dec 2011 - Nov 2012</span>
                                    <span className="item-small">Apple Inc.</span>
                                    <p className="item-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                                </div>
                                {/* <!-- / Experience 2 --> */}

                                {/* <!-- Experience 3 --> */}
                                <div className="timeline-item">
                                    <h4 className="item-title">Graphic Designer</h4>
                                    <span className="item-period">Jan 2010 - Dec 2011</span>
                                    <span className="item-small">Apple Inc.</span>
                                    <p className="item-description">Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
                                </div>
                                {/* <!-- / Experience 3 --> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="block">
                            <div className="block-title">
                                <h3>Design <span>Skills</span></h3>
                            </div>

                            <div className="skills-info">
                                <h4>Web Design</h4>
                                <div className="skill-container">
                                    <div className="skill-percentage skill-1"></div>
                                </div>

                                <h4>Graphic Design</h4>
                                <div className="skill-container">
                                    <div className="skill-percentage skill-2"></div>
                                </div>

                                <h4>Print Design</h4>
                                <div className="skill-container">
                                    <div className="skill-percentage skill-3"></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="block">
                            <div className="block-title">
                                <h3>Coding <span>Skills</span></h3>
                            </div>

                            <div className="skills-info">
                                <h4>HTML5</h4>
                                <div className="skill-container">
                                    <div className="skill-percentage skill-4"></div>
                                </div>

                                <h4>CSS3/LESS/SASS</h4>
                                <div className="skill-container">
                                    <div className="skill-percentage skill-5"></div>
                                </div>

                                <h4>jQuery</h4>
                                <div className="skill-container">
                                    <div className="skill-percentage skill-6"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
      );
    }
  }
  
  export default Resume;
  