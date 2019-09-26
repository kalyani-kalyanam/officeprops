import React from 'react';
import "./index.css";
import {Link} from  "react-router-dom";
class Header extends React.Component{
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
                        <Link to="index.html"><img src="images/logo.png" alt="WorkSpace Flexible Office Space"></img></Link>
                  </div>
                  <nav>
                     <ul>
                        <li className="menu-find-space">
                           <Link to="/search">Find Space</Link>
                           
                           
             {/*               <div className="sub-menu find-space">
                              <div className="dynamic-container">
                                 <div className="popular-cities">
                                    <div className="section-caption">
                                       <Link to="searchb7a0.html?ReservationMethod=SpecificTimePeriod">Popular US Cities</Link>
                                    </div>
                                    <ul className="column-list-1">
                                       <li><Link to="#">San Francisco</Link></li>
                                       <li><Link to="#">New York</Link></li>
                                       <li><Link to="#">Los Angeles</Link></li>
                                       <li><Link to="#">Boston</Link></li>
                                    </ul>
                                 </div>
                                 <div className="other-popular-cities">
                                    <div className="section-caption">
                                       <Link to="#">Work Flexible</Link>
                                    </div>
                                    <ul className="column-list-1">
                                       <li><Link to="#">altSpace</Link></li>
                                       <li><Link to="#">Customer Success Stories</Link></li>
                                       <li><Link to="#">Flexible Office Reports</Link></li>
                                       <li><Link to="#">Learning Space</Link></li>
                                    </ul>
                                 </div>
                                 <div className="workspace-nearby">
                                    <div className="section-caption">
                                       <Link to=#">Find Workspaces Nearby</Link>
                                    </div>
                                    <Link to="#" className="ocean-inverted-button">Monthly Workspaces</Link>
                                    <Link to="#" className="ocean-inverted-button">Hourly Workspaces</Link>
                                 </div>
                              </div>
                           </div>
                       
             */}
             
             
                       </li>
                       
                       
                        <li className="menu-share-space">
                           <Link to="#">List Space         
                           </Link>
                           
            {/*                <div className="sub-menu find-space">
                              <div className="dynamic-container">
                                 <div className="list-how-it-works">
                                    <div className="section-caption">
                                       <Link to="#">How It Works</Link>
                                    </div>
                                    <ul className="column-list-2">
                                       <li><Link to="#">Coworking</Link></li>
                                       <li><Link to="#">Business Center</Link></li>
                                       <li><Link to="#">Building Owner</Link></li>
                                       <li><Link to="#">Private Business</Link></li>
                                    </ul>
                                 </div>
                                 <div className="list-your-space">
                                    <div className="section-caption">
                                       List Your Space
                                    </div>
                                       <Link to="#" className="ocean-inverted-button">List My Space</Link>
                                 </div>
                              </div>
                           </div>
                           
                     */}	   
                        </li>
                        
                        
                        
                        <li className="menu-share-enterprise">
                           <Link to="#">Enterprise</Link>
                           
                           
                          {/*  <div className="sub-menu">
                              <div className="dynamic-container">
                              
                                 <div className="enterprise-solutions">
                                    <div className="section-caption">Enterprise Solutions</div>
                                    <ul className="column-list-2">
                                       <li><Link to="#">Discover Enterprise Solutions</Link></li>
                                       <li><Link to="#">Mobility Manager</Link></li>
                                       <li><Link to="#">Transaction Manager</Link></li>
                                       <li><Link to="#">altSpace - Custom Office Design</Link></li>
                                       <li><Link to="#">Broker Solutions</Link></li>
                                    </ul>
                                 </div>
                                 
                                 <div className="nav-flexible-office-reports">
                                    <div className="section-caption">
                                       <Link to="#">Flexible Office Reports</Link>
                                    </div>
                                    <ul className="column-list-2">
                                       <li><Link to="#">Q4 2017</Link></li>
                                       <li><Link to="#">Q3 2017</Link></li>
                                       <li><Link to="#">Q2 2017</Link></li>
                                       <li><Link to="#">Q1 2017</Link></li>
                                       <li><Link to="#">Q4 2016</Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div> */}
                           
                           
                        </li>
                        
                        
                        
            <li className="help-container"><Link to="#" className="help">Help</Link></li>			
            <li>< Link to="/login" data-test="sign-in-link" >Join/Sign In</Link> </li>
            </ul>
                  </nav>
               </div>
               
               
            </div>
            
            
            {/* <div className="mobile-layout">
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
             */}
                     </header>
            </div>
        );
    }
}
export default Header;