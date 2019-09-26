import React from 'react';
import "./index.css";
import {Link} from  "react-router-dom";
class HomeHeader extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
    <header>
            
            <div className="desktop-layout">
            
            
               <div className="dynamic-container  ">
                  <div className="logo">
                        <Link to="/Linkpp"><img src="images/logo.png" alt="WorkSpace Flexible Office Space"/></Link>
                  </div>
                  <nav>
                     <ul>
               
            
            <li className="menu-share-space"><Link to="/search_results">Search</Link></li>
            <li className="menu-share-space"><Link to="/recomonded">Recommended</Link></li>
            <li className="menu-share-space"><Link to="/shortlist">Shortlisted</Link></li>
            <li className="help-container"><Link to="/selected">Selected</Link></li>			
            
            <li className="menu-share-enterprise">
            <Link to="#">Satya</Link>
            
            
            <div className="sub-menu">
            <div className="dynamic-container">
            
            <div className="enterprise-solutions">
            
            <ul className="column-list-2">
            <li><Link to="#">My Profile</Link></li>
            <li><Link to="#">Change Password</Link></li>
            <li><Link to="index.html">Logout</Link></li>
            </ul>
            </div>
            
            
            </div>
            </div> 
            
            
            </li>
            
            
            </ul>
                  </nav>
               </div>
               
               
            </div>
            
            
            {/*<!-- <div className="mobile-layout">
               <div className="mobile-menu-wrapper">
                     <div className="mobile-menu">
                        <div className="top-section">
                              <a className="mobile-join" href="javascript:void(0);" data-test="sign-in-link">Join/Sign In</Link>
                        </div>
                        <ul>
                              <li className="home-link"><Link to="index.html">Home</Link></li>
                           <li className="menu-caption">Find Space</li>
                           <li className="section-caption expandable">
                              <span className="section-title">Find Workspace Nearby</span>
                              <ul>
                                 <li><Link to="#">Monthly Workspaces</Link></li>
                                 <li><Link to="#">Hourly Workspaces</Link></li>
                              </ul>
                           </li>
                           <li className="section-caption expandable">
                              <span className="section-title">
                                 Popular US Cities
                              </span>
                              <ul>
                                 <li><Link to="#">San Francisco</Link></li>
                                 <li><Link to="#">New York</Link></li>
                                 <li><Link to="#">Los Angeles</Link></li>
                                 <li><Link to="#">Boston</Link></li>
                              </ul>
                           </li>
                           <li className="section-caption expandable">
                              <span className="section-title">
                                 Work Flexible
                              </span>
                              <ul>
                                 <li><Link to="#">altSpace</Link></li>
                                 <li><Link to="#">Customer Success Stories</Link></li>
                                 <li><Link to="#">Flexible Office Reports</Link></li>
                                 <li><Link to="#">Learning Space</Link></li>
                              </ul>
                           </li>
                           <li className="menu-caption">List Space</li>
                           <li><Link to="#">List Space</Link></li>
                           <li className="menu-caption">Enterprise</li>
                           <li><Link to="#">Discover Enterprise Solutions</Link></li>
                           <li><Link to="#">Mobility Manager</Link></li>
                           <li><Link to="#">Transaction Manager</Link></li>
                           <li><Link to="#">Flexible Office Reports</Link></li>
                           <li className="menu-caption">altSpace</li>
                           <li><Link to="#">For Companies</Link></li>
                           <li><Link to="#">For Building Owners</Link></li>
                           <li><Link to="#">For Brokers</Link></li>
                        </ul>
                     </div>
               </div>
               <div className="dynamic-container  ">
                  <div className="mobile-menu-button">
                     <div className="notification-counter total-counter" data-bind="visible: totalNotificationsCount, text: totalNotificationsCount" style="display: none"></div>
                  </div>
                  <div className="mobile-header">
                        <div className="logo">
                              <Link to="index.html"><img src="images/logo.png" alt="WorkSpace Flexible Office Space"></Link>
                        </div>
                  </div>
                  <div className="mobile-menu-action">
                  </div>
               </div>
            </div>
        -->*/}
        
                    
         </header>

</div>
        );
    }
}
export default HomeHeader;