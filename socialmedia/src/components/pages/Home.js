import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <main>
                        <div className="main-section">
                          <div className="container">
                            <div className="main-section-data">
                              <div className="row">
                                <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                  <div className="main-left-sidebar no-margin">
                                    <div className="user-data full-width">
                                      <div className="user-profile">
                                        <div className="username-dt">
                                          <div className="usr-pic">
                                            <img src="images/resources/user-pic.png" alt />
                                          </div>
                                        </div>
                                        {/*username-dt end*/}
                                        <div className="user-specs">
                                          <h3>Mesti</h3>
                                        </div>
                                      </div>
                                      {/*user-profile end*/}
                                      <ul className="user-fw-status">
                                        <li>
                                          <h4>Rating</h4>
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star-half-alt" />
                                          <i className="far fa-star" />
                                        </li>
                                        <li>
                                          <Link
                                            to="/profile"
                                            title
                                          >
                                            View Profile
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                    {/*user-data end*/}
                                    <div className="tags-sec full-width">
                                      <ul>
                                        <li>
                                          <Link to="#" title>
                                            Help Center
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title>
                                            About
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title>
                                            Privacy Policy
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title>
                                            Community Guidelines
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title>
                                            Cookies Policy
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title>
                                            Career
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title>
                                            Language
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#" title>
                                            Copyright Policy
                                          </Link>
                                        </li>
                                      </ul>
                                      
                                    </div>
                                    {/*tags-sec end*/}
                                  </div>
                                  {/*main-left-sidebar end*/}
                                </div>
                                <div className="col-lg-6 col-md-8 no-pd">
                                  <div className="main-ws-sec">
                                    <div className="post-topbar">
                                      <div className="user-picy">
                                        <img src="images/resources/user-pic.png" alt />
                                      </div>
                                      <div className="post-st">
                                        <ul>
                                          <li>
                                            <Link className="post_project" to="#" title>
                                              Post a Blog
                                            </Link>
                                          </li>
                                          <li>
                                            <Link className="post-jb active" to="#" title>
                                              Post a Problem
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      {/*post-st end*/}
                                    </div>
                                    {/*post-topbar end*/}
                                    <div className="posts-section">
                                      <div className="top-profiles">
                                        <div className="pf-hd">
                                          <h3>Top Profiles</h3>
                                          <i className="la la-ellipsis-v" />
                                        </div>
                                        <div className="profiles-slider">
                                          <div className="user-profy">
                                            <img src="images/resources/user1.png" alt />
                                            <h3>John Doe</h3>
                                            <span>Graphic Designer</span>
                                            <ul>
                                              <li>
                                                <Link to="#" title className="followw">
                                                  Follow
                                                </Link>
                                              </li>
                                              {/* <li><Link to="#" title="" class="envlp"><img src="images/envelop.png" alt=""></Link></li> */}
                                              <li>
                                                <Link to="#" title className="hire">
                                                  hire
                                                </Link>
                                              </li>
                                            </ul>
                                            <Link to="#" title>
                                              View Profile
                                            </Link>
                                          </div>
                                          {/*user-profy end*/}
                                          <div className="user-profy">
                                            <img src="images/resources/user2.png" alt />
                                            <h3>John Doe</h3>
                                            <span>Graphic Designer</span>
                                            <ul>
                                              <li>
                                                <Link to="#" title className="followw">
                                                  Follow
                                                </Link>
                                              </li>
                                              {/* <li><Link to="#" title="" class="envlp"><img src="images/envelop.png" alt=""></Link></li> */}
                                              <li>
                                                <Link to="#" title className="hire">
                                                  hire
                                                </Link>
                                              </li>
                                            </ul>
                                            <Link to="#" title>
                                              View Profile
                                            </Link>
                                          </div>
                                          {/*user-profy end*/}
                                          <div className="user-profy">
                                            <img src="images/resources/user3.png" alt />
                                            <h3>John Doe</h3>
                                            <span>Graphic Designer</span>
                                            <ul>
                                              <li>
                                                <Link to="#" title className="followw">
                                                  Follow
                                                </Link>
                                              </li>
                                              {/* <li><Link to="#" title="" class="envlp"><img src="images/envelop.png" alt=""></Link></li> */}
                                              <li>
                                                <Link to="#" title className="hire">
                                                  hire
                                                </Link>
                                              </li>
                                            </ul>
                                            <Link to="#" title>
                                              View Profile
                                            </Link>
                                          </div>
                                          {/*user-profy end*/}
                                          <div className="user-profy">
                                            <img src="images/resources/user1.png" alt />
                                            <h3>John Doe</h3>
                                            <span>Graphic Designer</span>
                                            <ul>
                                              <li>
                                                <Link to="#" title className="followw">
                                                  Follow
                                                </Link>
                                              </li>
                                              {/* <li><Link to="#" title="" class="envlp"><img src="images/envelop.png" alt=""></Link></li> */}
                                              <li>
                                                <Link to="#" title className="hire">
                                                  hire
                                                </Link>
                                              </li>
                                            </ul>
                                            <Link to="#" title>
                                              View Profile
                                            </Link>
                                          </div>
                                          {/*user-profy end*/}
                                          <div className="user-profy">
                                            <img src="images/resources/user2.png" alt />
                                            <h3>John Doe</h3>
                                            <span>Graphic Designer</span>
                                            <ul>
                                              <li>
                                                <Link to="#" title className="followw">
                                                  Follow
                                                </Link>
                                              </li>
                                              {/* <li><Link to="#" title="" class="envlp"><img src="images/envelop.png" alt=""></Link></li> */}
                                              <li>
                                                <Link to="#" title className="hire">
                                                  hire
                                                </Link>
                                              </li>
                                            </ul>
                                            <Link to="#" title>
                                              View Profile
                                            </Link>
                                          </div>
                                          {/*user-profy end*/}
                                          <div className="user-profy">
                                            <img src="images/resources/user3.png" alt />
                                            <h3>John Doe</h3>
                                            <span>Graphic Designer</span>
                                            <ul>
                                              <li>
                                                <Link to="#" title className="followw">
                                                  Follow
                                                </Link>
                                              </li>
                                              {/* <li><Link to="#" title="" class="envlp"><img src="images/envelop.png" alt=""></Link></li> */}
                                              <li>
                                                <Link to="#" title className="hire">
                                                  hire
                                                </Link>
                                              </li>
                                            </ul>
                                            <Link to="#" title>
                                              View Profile
                                            </Link>
                                          </div>
                                          {/*user-profy end*/}
                                        </div>
                                        {/*profiles-slider end*/}
                                      </div>
                                      {/*top-profiles end*/}
                                      <div className="posty">
                                        <div className="post-bar no-margin">
                                          <div className="post_topbar">
                                            <div className="usy-dt">
                                              <img src="images/resources/us-pc2.png" alt />
                                              <div className="usy-name">
                                                <h3>John Doe</h3>
                                                <span>
                                                  <img src="images/clock.png" alt />3 min ago
                                                </span>
                                              </div>
                                            </div>
                                            <div className="ed-opts">
                                              <Link to="#" title className="ed-opts-open">
                                                <i className="la la-ellipsis-v" />
                                              </Link>
                                              <ul className="ed-options">
                                                <li>
                                                  <Link to="#" title>
                                                    Edit Post
                                                  </Link>
                                                </li>
                                                <li>
                                                  <Link to="#" title>
                                                    Unsaved
                                                  </Link>
                                                </li>
                                                <li>
                                                  <Link to="#" title>
                                                    Unbid
                                                  </Link>
                                                </li>
                                                <li>
                                                  <Link to="#" title>
                                                    Close
                                                  </Link>
                                                </li>
                                                <li>
                                                  <Link to="#" title>
                                                    Hide
                                                  </Link>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="epi-sec">
                                            <ul className="descp">
                                              <li>
                                                <img src="images/icon8.png" alt />
                                                <span>Zerife Eliyeva adina lisey</span>
                                              </li>
                                              <li>
                                                <img src="images/icon9.png" alt />
                                                <span>Baku</span>
                                              </li>
                                            </ul>
                                            <ul className="bk-links">
                                              <li>
                                                <Link to="#" title>
                                                  <i className="la la-bookmark" />
                                                </Link>
                                              </li>
                                              {/* <li><Link to="#" title=""><i class="la la-envelope"></i></Link></li> */}
                                            </ul>
                                          </div>
                                          <div className="job_descp">
                                            <h3>Abituriyent sehife 20, mesele 30</h3>
                                            <ul className="job-dt">
                                              <li>
                                                <Link to="#" title>
                                                  Trigonometry
                                                </Link>
                                              </li>
                                              {/* <li><span>$30 / hr</span></li> */}
                                            </ul>
                                            <p>
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                              Aliquam luctus hendrerit metus, ut ullamcorper quam
                                              finibus at. Etiam id magna sit amet...{" "}
                                              <Link to="#" title>
                                                view more
                                              </Link>
                                            </p>
                                          </div>
                                          <div className="job-status-bar">
                                            <ul className="like-com">
                                              <li>
                                                <Link to="#">
                                                  <i className="fas fa-heart" /> Like
                                                </Link>
                                                <img src="images/liked-img.png" alt />
                                                <span>25</span>
                                              </li>
                                              <li>
                                                <Link to="#" className="com">
                                                  <i className="fas fa-comment-alt" /> Comment 15
                                                </Link>
                                              </li>
                                            </ul>
                                            <Link to="#">
                                              <i className="fas fa-eye" />
                                              Views 50
                                            </Link>
                                          </div>
                                        </div>
                                        {/*post-bar end*/}
                                        <div className="comment-section">
                                          <Link to="#" className="plus-ic">
                                            <i className="la la-plus" />
                                          </Link>
                                          <div className="comment-sec">
                                            <ul>
                                              <li>
                                                <div className="comment-list">
                                                  <div className="bg-img">
                                                    <img src="images/resources/bg-img1.png" alt />
                                                  </div>
                                                  <div className="comment">
                                                    <h3>John Doe</h3>
                                                    <span>
                                                      <img src="images/clock.png" alt /> 3 min ago
                                                    </span>
                                                    <p>Lorem ipsum dolor sit amet, </p>
                                                    <Link to="#" title className="active">
                                                      <i className="fa fa-reply-all" />
                                                      Reply
                                                    </Link>
                                                  </div>
                                                </div>
                                                {/*comment-list end*/}
                                                <ul>
                                                  <li>
                                                    <div className="comment-list">
                                                      <div className="bg-img">
                                                        <img src="images/resources/bg-img2.png" alt />
                                                      </div>
                                                      <div className="comment">
                                                        <h3>John Doe</h3>
                                                        <span>
                                                          <img src="images/clock.png" alt /> 3 min ago
                                                        </span>
                                                        <p>Hi John </p>
                                                        <Link to="#" title>
                                                          <i className="fa fa-reply-all" />
                                                          Reply
                                                        </Link>
                                                      </div>
                                                    </div>
                                                    {/*comment-list end*/}
                                                  </li>
                                                </ul>
                                              </li>
                                              <li>
                                                <div className="comment-list">
                                                  <div className="bg-img">
                                                    <img src="images/resources/bg-img3.png" alt />
                                                  </div>
                                                  <div className="comment">
                                                    <h3>John Doe</h3>
                                                    <span>
                                                      <img src="images/clock.png" alt /> 3 min ago
                                                    </span>
                                                    <p>
                                                      Lorem ipsum dolor sit amet, consectetur
                                                      adipiscing elit. Aliquam luctus hendrerit metus,
                                                      ut ullamcorper quam finibus at.
                                                    </p>
                                                    <Link to="#" title>
                                                      <i className="fa fa-reply-all" />
                                                      Reply
                                                    </Link>
                                                  </div>
                                                </div>
                                                {/*comment-list end*/}
                                              </li>
                                            </ul>
                                          </div>
                                          {/*comment-sec end*/}
                                          <div className="post-comment">
                                            <div className="cm_img">
                                              <img src="images/resources/bg-img4.png" alt />
                                            </div>
                                            <div className="comment_box">
                                              <form>
                                                <input type="text" placeholder="Post a comment" />
                                                <button type="submit">Send</button>
                                              </form>
                                            </div>
                                          </div>
                                          {/*post-comment end*/}
                                        </div>
                                        {/*comment-section end*/}
                                      </div>
                                      {/*posty end*/}
                                      <div className="process-comm">
                                        <div className="spinner">
                                          <div className="bounce1" />
                                          <div className="bounce2" />
                                          <div className="bounce3" />
                                        </div>
                                      </div>
                                      {/*process-comm end*/}
                                    </div>
                                    {/*posts-section end*/}
                                  </div>
                                  {/*main-ws-sec end*/}
                                </div>
                                <div className="col-lg-3 pd-right-none no-pd">
                                  <div className="right-sidebar">
                                    <div className="widget suggestions full-width">
                                      <div className="sd-title">
                                        <h3>Top Users</h3>
                                        <i className="la la-ellipsis-v" />
                                      </div>
                                      {/*sd-title end*/}
                                      <div className="suggestions-list">
                                        <div className="suggestion-usd">
                                          <img src="images/resources/s1.png" alt />
                                          <div className="sgt-text">
                                            <h4>Jessica William</h4>
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            {/* <span>Graphic Designer</span> */}
                                          </div>
                                          <span>
                                            <i className="la la-plus" />
                                          </span>
                                        </div>
                                        <div className="suggestion-usd">
                                          <img src="images/resources/s2.png" alt />
                                          <div className="sgt-text">
                                            <h4>John Doe</h4>
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half-alt" />
                                            <i className="far fa-star" />
                                            {/* <span>PHP Developer</span> */}
                                          </div>
                                          <span>
                                            <i className="la la-plus" />
                                          </span>
                                        </div>
                                        <div className="suggestion-usd">
                                          <img src="images/resources/s3.png" alt />
                                          <div className="sgt-text">
                                            <h4>Poonam</h4>
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half-alt" />
                                            <i className="far fa-star" />
                                            {/* <span>Wordpress Developer</span> */}
                                          </div>
                                          <span>
                                            <i className="la la-plus" />
                                          </span>
                                        </div>
                                        <div className="suggestion-usd">
                                          <img src="images/resources/s4.png" alt />
                                          <div className="sgt-text">
                                            <h4>Bill Gates</h4>
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half-alt" />
                                            <i className="far fa-star" />
                                            {/* <span>C &amp; C++ Developer</span> */}
                                          </div>
                                          <span>
                                            <i className="la la-plus" />
                                          </span>
                                        </div>
                                        <div className="suggestion-usd">
                                          <img src="images/resources/s5.png" alt />
                                          <div className="sgt-text">
                                            <h4>Jessica William</h4>
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="far fa-star" />
                                            <i className="far fa-star" />
                                            {/* <span>Graphic Designer</span> */}
                                          </div>
                                          <span>
                                            <i className="la la-plus" />
                                          </span>
                                        </div>
                                        <div className="suggestion-usd">
                                          <img src="images/resources/s6.png" alt />
                                          <div className="sgt-text">
                                            <h4>John Doe</h4>
                                            <i className="fas fa-star" />
                                            <i className="far fa-star" />
                                            <i className="far fa-star" />
                                            <i className="far fa-star" />
                                            {/* <span>PHP Developer</span> */}
                                          </div>
                                          <span>
                                            <i className="la la-plus" />
                                          </span>
                                        </div>
                                        <div className="view-more">
                                          <Link to="#" title>
                                            View More
                                          </Link>
                                        </div>
                                      </div>
                                      {/*suggestions-list end*/}
                                    </div>
                                    <div className="widget widget-jobs">
                                      <div className="sd-title">
                                        <h3>Top Problems for This Week</h3>
                                        <i className="la la-ellipsis-v" />
                                      </div>
                                      <div className="jobs-list">
                                        <div className="job-info">
                                          <div className="job-details">
                                            <ul className="job-dt">
                                              <li>
                                                <Link to="#" title>
                                                  Trigonometry
                                                </Link>
                                              </li>
                                              {/* <li><span>$30 / hr</span></li> */}
                                            </ul>
                                            <p>
                                              Lorem ipsum dolor sit amet, consectetur adipiscing
                                              elit..
                                            </p>
                                          </div>
                                          <div className="hr-rate">
                                            <span>45 Like</span>
                                          </div>
                                        </div>
                                        {/*job-info end*/}
                                        <div className="job-info">
                                          <div className="job-details">
                                            <ul className="job-dt">
                                              <li>
                                                <Link to="#" title>
                                                  Factorial
                                                </Link>
                                              </li>
                                              {/* <li><span>$30 / hr</span></li> */}
                                            </ul>
                                            <p>
                                              Lorem ipsum dolor sit amet, consectetur adipiscing
                                              elit..
                                            </p>
                                          </div>
                                          <div className="hr-rate">
                                            <span>35 Like</span>
                                          </div>
                                        </div>
                                        {/*job-info end*/}
                                        <div className="job-info">
                                          <div className="job-details">
                                            <ul className="job-dt">
                                              <li>
                                                <Link to="#" title>
                                                  Trigonometry
                                                </Link>
                                              </li>
                                              {/* <li><span>$30 / hr</span></li> */}
                                            </ul>
                                            <p>
                                              Lorem ipsum dolor sit amet, consectetur adipiscing
                                              elit..
                                            </p>
                                          </div>
                                          <div className="hr-rate">
                                            <span>25 Like</span>
                                          </div>
                                        </div>
                                        {/*job-info end*/}
                                      </div>
                                      {/*jobs-list end*/}
                                    </div>
                                    {/*widget-jobs end*/}
                                  </div>
                                  {/*right-sidebar end*/}
                                </div>
                              </div>
                            </div>
                            {/* main-section-data end*/}
                          </div>
                        </div>
                      </main>
        )
    }
}


export default Home;