import React, { Component } from 'react';
import blog_post1 from '../images/blog/blog_post_1.jpg';

class Blog extends Component {
    render() {

        const grid = {
            position: 'relative',
            height: '979.218px'
        }
        const post1 = {
            position: 'absolute',
            left: '0px', 
            top: '0px',
            };
        const post2 = {
            position: 'absolute',
            left: '481px', 
            top: '0px',
            };
        const post3 = {
            position: 'absolute',
            left: '0px', 
            top: '326px',
            };    
        const post4 = {
            position: 'absolute',
            left: '481px', 
            top: '326px',
            };
        const post5 = {
            position: 'absolute',
            left: '0px', 
            top: '652px',
            };
        const post6= {
            position: 'absolute',
            left: '481px', 
            top: '652px',
            };
        
        
      return (
        <section className="pt-page" id="section_blog">
           <div className="section-inner custom-page-content">
							<div className="page-header color-1">
								<h2>Blog</h2>
							</div>
							<div className="page-content">

                                {/* <!-- Blog Posts Grid --> */}                                
								<div className="blog-masonry two-columns" style={grid} >
									{/* <!-- Blog Post 1 --> */}
									<div className="item" style={post1}>
										<div className="blog-card">
											<div className="media-block">
												<a href="blog-post-1.html">
													<img className="post-image img-responsive" src={ blog_post1 } alt="blog-post-1"></img>
													<div className="mask"></div>
													<div className="post-date"><span className="day">6</span><span className="month">Dec</span>
                                                    {/* <!--<span className="year">2016</span>--> */}
                                                    </div>
												</a>
											</div>
											<div className="post-info">
												<ul className="category">
													<li><a href="">Travel</a></li>
												</ul>
												<a href="blog-post-1.html"><h4 className="blog-item-title">Bootstrap is the Most Popular Framework</h4></a>
											</div>
										</div>
									</div>
									{/* <!-- End of Blog Post 1 --> */}

									{/* <!-- Blog Post 2 --> */}
									<div className="item" style={post2}>
										<div className="blog-card">
											<div className="media-block">
												<a href="blog-post-1.html">
													<img className="post-image img-responsive" src={ blog_post1 }  alt="blog-post-2"></img>
													<div className="mask"></div>
													<div className="post-date"><span className="day">3</span><span className="month">Nov</span>
                                                    {/* <!--<span className="year">2016</span>--> */}
                                                    </div>
												</a>
											</div>
											<div className="post-info">
												<ul className="category">
													<li><a href="">jQuery</a></li>
												</ul>
												<a href="blog-post-1.html"><h4 className="blog-item-title">One Framework, Every Device</h4></a>
											</div>
										</div>
									</div>
									{/* <!-- End of Blog Post 2 --> */}

									{/* <!-- Blog Post 3 --> */}
									<div className="item" style={post3} >
										<div className="blog-card">
											<div className="media-block">
												<a href="blog-post-1.html">
													<img className="post-image img-responsive" src={ blog_post1 }  alt="blog-post-3"></img>
													<div className="mask"></div>
													<div className="post-date"><span className="day">12</span><span className="month">Oct</span>
                                                    {/* <!--<span className="year">2016</span>--> */}
                                                    </div>
												</a>
											</div>
											<div className="post-info">
												<ul className="category">
													<li><a href="">Sport</a></li>
												</ul>
												<a href="blog-post-1.html"><h4 className="blog-item-title">Designed for Everyone, Everywhere</h4></a>
											</div>
										</div>
									</div>
									{/* <!-- End of Blog Post 3 --> */}

									{/* <!-- Blog Post 4 --> */}
									<div className="item" style={post4}>
										<div className="blog-card">
											<div className="media-block">
												<a href="blog-post-1.html">
													<img className="post-image img-responsive" src={ blog_post1 }  alt="blog-post-4"></img>
													<div className="mask"></div>
													<div className="post-date"><span className="day">18</span><span className="month">Aug</span>
                                                    {/* <!--<span className="year">2016</span>--> */}
                                                    </div>
												</a>
											</div>
											<div className="post-info">
												<ul className="category">
													<li><a href="">CSS</a></li>
												</ul>
												<a href="blog-post-1.html"><h4 className="blog-item-title">An Introduction To PostCSS</h4></a>
											</div>
										</div>
									</div>
									{/* <!-- End of Blog Post 4 --> */}

									{/* <!-- Blog Post 5 --> */}
									<div className="item" style={post5} >
										<div className="blog-card">
											<div className="media-block">
												<a href="blog-post-1.html">
													<img className="post-image img-responsive" src={ blog_post1 }  alt="blog-post-5"></img>
													<div className="mask"></div>
													<div className="post-date"><span className="day">2</span><span className="month">Jul</span>
                                                    {/* <!--<span className="year">2016</span>--> */}
                                                    </div>
												</a>
											</div>
											<div className="post-info">
												<ul className="category">
													<li><a href="">CSS3</a></li>
												</ul>
												<a href="blog-post-1.html"><h4 className="blog-item-title">Original and Innovative Web Layouts</h4></a>
											</div>
										</div>
									</div>
									{/* <!-- End of Blog Post 5 --> */}

									{/* <!-- Blog Post 6 --> */}
									<div className="item" style={post6} >
										<div className="blog-card">
											<div className="media-block">
												<a href="blog-post-1.html">
													<img className="post-image img-responsive" src={ blog_post1 }  alt="blog-post-6"></img>
													<div className="mask"></div>
													<div className="post-date"><span className="day">8</span><span className="month">May</span>
                                                    {/* <!--<span className="year">2016</span>--> */}
                                                    </div>
												</a>
											</div>
											<div className="post-info">
												<ul className="category">
													<li><a href="">HTML5</a></li>
												</ul>
												<a href="blog-post-1.html"><h4 className="blog-item-title">Creative and Innovative Navigation Designs</h4></a>
											</div>
										</div>
									</div>
									{/* <!-- End of Blog Post 6 --> */}

								</div>
								{/* <!-- Blog Posts Grid --> */}
							</div>
						</div> 
        </section>
      );
    }
  }
  
  export default Blog;
  