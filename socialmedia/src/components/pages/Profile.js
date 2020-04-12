import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Profile extends Component {
    render() {
        return (
            <div>
  <section className="cover-sec">
    <img src="images/resources/cover-img.jpg" alt />
  </section>
  <main>
    <div className="main-section">
      <div className="container">
        <div className="main-section-data">
          <div className="row">
            <div className="col-lg-3">
              <div className="main-left-sidebar">
                <div className="user_profile">
                  <div className="user-pro-img">
                    <img src="images/resources/user-pro-img.png" alt />
                  </div>
                  {/*user-pro-img end*/}
                  <div className="user_pro_status">
                    <ul className="flw-hr">
                      <li>
                        <Link to="#" title className="flww">
                          <i className="la la-plus" /> Follow
                        </Link>
                      </li>
                     
                    </ul>
                    <ul className="flw-status">
                      <li>
                        <span>Following</span>
                        <b>34</b>
                      </li>
                      <li>
                        <span>Friends</span>
                        <b>155</b>
                      </li>
                    </ul>
                  </div>
                  {/*user_pro_status end*/}
                  <ul className="social_links">
                    <li>
                      <Link to="#" title>
                        <i className="la la-globe" /> Mekteb
                      </Link>
                    </li>
                   
                  </ul>
                </div>
                {/*user_profile end*/}
               
                {/*suggestions end*/}
              </div>
              {/*main-left-sidebar end*/}
            </div>
            <div className="col-lg-6">
              <div className="main-ws-sec">
                <div className="user-tab-sec">
                  <h3>John Doe</h3>
                  <div className="star-descp">
                    
                    <ul>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-o" />
                      </li>
                    </ul>
                  </div>
                  {/*star-descp end*/}
                 
                  {/* tab-feed end*/}
                </div>
                {/*user-tab-sec end*/}
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
                
                    {/*post-bar end*/}
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
                {/*product-feed-tab end*/}
               
                  {/*user-profile-ov end*/}
                  
                {/*product-feed-tab end*/}
                
                {/*product-feed-tab end*/}
              </div>
              {/*main-ws-sec end*/}
            </div>
            
          </div>
        </div>
        {/* main-section-data end*/}
      
    
  </main>
</div>

        )
    }
}


export default Profile;