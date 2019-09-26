import React from 'react';
import "./index.css";
import {Link} from  "react-router-dom";
class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <div className="links-section h5 footer_text">

 
<div className="links-block">
   <h3 className="links-block-name h5b">Explore WorkSpace</h3>
   <ul className="links-list">
      <li><Link to="#">Brokers</Link></li>
      <li><Link to="#">How it Works</Link></li>
      <li><Link to="#">Download iPhone App</Link></li>
      <li><Link to="#">Careers</Link></li>
      <li><Link to="#">Press</Link></li>

      <li><Link to="#">Venue Locations</Link></li>
      <li><Link to="#">Find Space</Link></li>
      <li><Link to="#">Download Android App</Link></li>
      <li><Link to="#">Blog</Link></li>
      <li><Link to="#">About Us</Link></li>

      <li><Link to="#">Building Owners</Link></li>
      <li><Link to="#">List Space</Link></li>
     
      <li><Link to="#">Help</Link></li>
      <li><Link to="#">Office Reports</Link></li>
   </ul>
</div>



<footer>
<div className="social-buttons-wrapper">
   <Link to="#" className="footer-social-btn twitter"></Link>
   <Link to="#" className="footer-social-btn facebook" ></Link>
   <Link to="#" className="footer-social-btn linkedin"  ></Link>
   <Link to="#" className="footer-social-btn googleplus" ></Link>
   <Link to="#" className="footer-social-btn instagram" ></Link>
   <Link to="#" className="footer-social-btn youtube" ></Link>
   <Link to="#" className="footer-social-btn pinterest"></Link>
</div>   

<div className="footer-links">
<Link to="#" className="footer-link"  target="_blank">Terms of Use</Link><span className="footer-link-updated"> (Updated) </span> |
<Link to="#" className="footer-link"  target="_blank">Privacy Policy</Link>
</div>

<div className="rights">
&copy; WorkSpace. 2019
</div>


</footer>
</div>
            </div>
        );
    }
}
export default Footer;