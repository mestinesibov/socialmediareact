import React from 'react'
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-dark">
//   <Link className="navbar-brand ml-5" to="/">
//       <img src={logo} alt="logo" style={{ width: '35px' }} />
//   </Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span>
//       <i className="fas fa-bars" style={{ color: '#fff' }} />
//     </span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav m-auto">
//       <li className="nav-item active">
//         <Link className="nav-link text-white text-uppercase ml-5" to="/">Home&nbsp; <i class="fas fa-home"></i> <span className="sr-only">(current)</span></Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link text-white text-uppercase ml-5" to="/news">News</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link text-white text-uppercase ml-5" to="/contacts">Contact us</Link>
//       </li>
      
//     </ul>
//     <form className="form-inline my-2 my-lg-0 ">
//       <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
//       <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
//     </form>
    
//   </div>
// </nav>
<header>
  <div className="container">
    <div className="header-data">
      <div className="logo">
        <Link to="index-2.html" title>
          <img src="images/unnamed.png" alt />
        </Link>
      </div>
      {/*logo end*/}
      <div className="search-bar">
        <form>
          <input type="text" name="search" placeholder="Search..." />
          <button type="submit">
            <i className="la la-search" />
          </button>
        </form>
      </div>
      {/*search-bar end*/}
      <nav>
        <ul>
          <li>
            <Link to="/" title>
              <span>
                <img src="images/icon1.png" alt />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link to="projects.html" title>
              <span>
                <img src="images/icon3.png" alt />
              </span>
              Problems
            </Link>
          </li>
          <li>
            <Link to="/books" title>
              <span>
                <img src="images/icon5.png" alt />
              </span>
              Books
            </Link>
          </li>
          
          <li>
            <Link to="#" title className="not-box-openm">
              <span>
                <img src="images/icon6.png" alt />
              </span>
              Messages
            </Link>
            <div className="notification-box msg" id="message">
              <div className="nt-title">
                <h4>Setting</h4>
                <Link to="#" title>
                  Clear all
                </Link>
              </div>
              <div className="nott-list">
                <div className="notfication-details">
                  <div className="noty-user-img">
                    <img src="images/resources/ny-img1.png" alt />
                  </div>
                  <div className="notification-info">
                    <h3>
                      <Link to="messages.html" title>
                        Jassica William
                      </Link>{" "}
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do.
                    </p>
                    <span>2 min ago</span>
                  </div>
                  {/*notification-info */}
                </div>
                <div className="notfication-details">
                  <div className="noty-user-img">
                    <img src="images/resources/ny-img2.png" alt />
                  </div>
                  <div className="notification-info">
                    <h3>
                      <Link to="messages.html" title>
                        Jassica William
                      </Link>
                    </h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <span>2 min ago</span>
                  </div>
                  {/*notification-info */}
                </div>
                <div className="notfication-details">
                  <div className="noty-user-img">
                    <img src="images/resources/ny-img3.png" alt />
                  </div>
                  <div className="notification-info">
                    <h3>
                      <Link to="messages.html" title>
                        Jassica William
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempo incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <span>2 min ago</span>
                  </div>
                  {/*notification-info */}
                </div>
                <div className="view-all-nots">
                  <Link to="messages.html" title>
                    View All Messsages
                  </Link>
                </div>
              </div>
              {/*nott-list end*/}
            </div>
            {/*notification-box end*/}
          </li>
          <li>
            <Link to="#" title className="not-box-open">
              <span>
                <img src="images/icon7.png" alt />
              </span>
              Notification
            </Link>
            <div className="notification-box noti" id="notification">
              <div className="nt-title">
                <h4>Setting</h4>
                <Link to="#" title>
                  Clear all
                </Link>
              </div>
              <div className="nott-list">
                <div className="notfication-details">
                  <div className="noty-user-img">
                    <img src="images/resources/ny-img1.png" alt />
                  </div>
                  <div className="notification-info">
                    <h3>
                      <Link to="#" title>
                        Jassica William
                      </Link>{" "}
                      Comment on your project.
                    </h3>
                    <span>2 min ago</span>
                  </div>
                  {/*notification-info */}
                </div>
                <div className="notfication-details">
                  <div className="noty-user-img">
                    <img src="images/resources/ny-img2.png" alt />
                  </div>
                  <div className="notification-info">
                    <h3>
                      <Link to="#" title>
                        Jassica William
                      </Link>{" "}
                      Comment on your project.
                    </h3>
                    <span>2 min ago</span>
                  </div>
                  {/*notification-info */}
                </div>
                <div className="notfication-details">
                  <div className="noty-user-img">
                    <img src="images/resources/ny-img3.png" alt />
                  </div>
                  <div className="notification-info">
                    <h3>
                      <Link to="#" title>
                        Jassica William
                      </Link>{" "}
                      Comment on your project.
                    </h3>
                    <span>2 min ago</span>
                  </div>
                  {/*notification-info */}
                </div>
                <div className="notfication-details">
                  <div className="noty-user-img">
                    <img src="images/resources/ny-img2.png" alt />
                  </div>
                  <div className="notification-info">
                    <h3>
                      <Link to="#" title>
                        Jassica William
                      </Link>{" "}
                      Comment on your project.
                    </h3>
                    <span>2 min ago</span>
                  </div>
                  {/*notification-info */}
                </div>
                <div className="view-all-nots">
                  <Link to="#" title>
                    View All Notification
                  </Link>
                </div>
              </div>
              {/*nott-list end*/}
            </div>
            {/*notification-box end*/}
          </li>
        </ul>
      </nav>
      {/*nav end*/}
      <div className="menu-btn">
        <Link to="#" title>
          <i className="fa fa-bars" />
        </Link>
      </div>
      {/*menu-btn end*/}
      <div className="user-account">
        <div className="user-info">
          <img src="images/resources/user.png" alt />
          <Link to="/profile" title>
            Mesti
          </Link>
          <i className="la la-sort-down" />
        </div>
        <div className="user-account-settingss" id="users">
          <h3>Online Status</h3>
          <ul className="on-off-status">
            <li>
              <div className="fgt-sec">
                <input type="radio" name="cc" id="c5" />
                <label htmlFor="c5">
                  <span />
                </label>
                <small>Online</small>
              </div>
            </li>
            <li>
              <div className="fgt-sec">
                <input type="radio" name="cc" id="c6" />
                <label htmlFor="c6">
                  <span />
                </label>
                <small>Offline</small>
              </div>
            </li>
          </ul>
          <h3>Custom Status</h3>
          <div className="search_form">
            <form>
              <input type="text" name="search" />
              <button type="submit">Ok</button>
            </form>
          </div>
          {/*search_form end*/}
          <h3>Setting</h3>
          <ul className="us-links">
            <li>
              <Link to="profile-account-setting.html" title>
                Account Setting
              </Link>
            </li>
            <li>
              <Link to="#" title>
                Privacy
              </Link>
            </li>
            <li>
              <Link to="#" title>
                Faqs
              </Link>
            </li>
            <li>
              <Link to="#" title>
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
          <h3 className="tc">
            <Link to="sign-in.html" title>
              Logout
            </Link>
          </h3>
        </div>
        {/*user-account-settingss end*/}
      </div>
    </div>
    {/*header-data end*/}
  </div>
</header>





    )
}


export default Navbar;