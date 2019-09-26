import React from 'react';
import {Link} from  "react-router-dom";


import HomeHeader from './homeheader';
import Footer from './footer';

class IndexHome extends React.Component{
   constructor(props){
      super(props);
      this.state={
         
          loading:false,
          
          };
  }
  componentDidMount(){
  
      this.setState({loading:true});
    }
  render(){
  return (
     <div>
          {this.state.loading
        ? (   
     <div className=" h5 pb footer_text">
    <div className="page-wrapper page-wrapper--bigfooter">
      <div className="clear">
      </div>
        <HomeHeader/>
      
   
      
      <div id="wrapper" className="">
         <div className="clear">
         </div>
         <div className="page">
            <div id="main">
               



{/*<!--[if lte IE 9]>
   <div className="primary-header-message pw h5">
   <Link to="javascript:void(0)" className="primary-header-message-close"></Link>
   WorkSpace no longer supports IE9 (or earlier versions). Please upgrade for the best possible user experience. Chrome is nice ;)
</div>


<![endif]-->*/}
<div className="xsection-wrapper" id="homePageWrapper">

   <div className="xsection xsection-hero home-swiper">
      <div className="swiper-container hero-swiper-container">
         <div className="swiper-wrapper hero-swiper-wrapper">
            <div className="swiper-slide hero-techspace">
               <div className="swiper-venue-name h7 ts sw">WorkSpace — MindSpace, Hyderabad, Telangana, India</div>
            </div>
         </div>
         <div className="swiper-pagination hero-swiper-pagination"></div>
      </div>
      <div className="xsection-hero-gradient"></div>
      <div className="xsection-content">
         <h1 className="h1-hero pw">Flexible Office. Fast.</h1>
         <h2 className="h15-hero-spacetypes h2b pw">Coworking / Business Centers / Sublets / Landlord Spec Suites</h2>
         <div className="searchbar-wrapper">
            <div className="searchbar-mode searchbar-mode-find fl h3">
               <input className="h3" type="text" value="" placeholder="Where do you need space?" id="searchbarInput" autoComplete="off" />
               <label>Where do you need space?</label>
               <Link to="search.html"><button className="orange-button h3b" id="searchbarButton">
                  Find Space
               </button></Link>
               
            </div>
         </div>
         <div className="h15-suggestions pw">
            Top cities:
            <Link to="#" className="pw h15-suggestion" >Hyderabad</Link>,
            <Link to="#" className="pw h15-suggestion" >Bangalore</Link>,
            <Link to="#" className="pw h15-suggestion" >Mumbai</Link>,
            <Link to="#" className="pw h15-suggestion" >Chennai</Link>,
            <Link to="#" className="pw h15-suggestion" >Delhi</Link>,
			<Link to="#" className="pw h15-suggestion" >Kolkata</Link>
         </div>
      </div>
   </div>
   

   
   <div className="xsection">
      <div className="xsection-content h15-spacetypes-content">
         <div className="h4 h15-spacetypes-header">Whether you need space for 1 or 200—it's here.</div>
         <div className="h15-spacetypes">
            <div className="h15-spacetype">
               <div className="h15-spacetype-name h4">Hourly</div>
               <div className="h15-spacetype-description h3b">
                  Commitment-free workspaces
                  when you need them
               </div>
			<div className="h15-spacetype-links">
			<Link to="#" className="h15-spacetype-link colorbk">Desks by the Hour</Link>
			<Link to="#" className="h15-spacetype-link colorbk">Private Office by the Hour</Link>
			<Link to="#" className="h15-spacetype-link colorbk">Meeting Rooms</Link>
			</div>
			
               <Link to="#" className="ocean-button h15-spacetype-browsebutton">Browse Hourly Spaces</Link>
            </div>
            <div className="h15-spacetype">
               <div className="h15-spacetype-name h4">Monthly</div>
               <div className="h15-spacetype-description h3b">
                  Dedicated move-in-ready spaces
                  on safe and simple terms
               </div>
               <div className="h15-spacetype-links">
                  <Link to="#" className="h15-spacetype-link colorbk">Desks</Link>
                  <Link to="#" className="h15-spacetype-link colorbk">Private Offices</Link>
                  <Link to="#" className="h15-spacetype-link colorbk">Office Suites</Link>
               </div>
      <Link to="#" className="ocean-button h15-spacetype-browsebutton">Browse Monthly Spaces</Link>
            </div>
            <div className="h15-spacetype h15-spacetype-enterprise">
               <div className="h15-spacetype-name h4">Custom Offices</div>
               <div className="h15-spacetype-description h3b">
                  Workspace built for your team,
                  tailored to your business
               </div>
               <div className="h15-spacetype-links">
                 <Link to="#" className="h15-spacetype-link colorbk">Pune</Link>
                  <Link to="#" className="h15-spacetype-link colorbk">Hyderabad</Link>
                    <Link to="#" className="h15-spacetype-link colorbk">More Cities</Link>
               </div>
               <Link to="#" className="charcoal-button h15-spacetype-browsebutton">Learn More</Link>
            </div>
         </div>
		 
         <div className="h15-share-content">
            <div>Have space to share? </div>
            <div>
               <Link to="#">Learn how to List Your Space</Link>
            </div>
         </div>
      </div>
   </div>
 

  
  <div className="xsection h15-widepicture h15-widepicture-altspace">
      <div className="xsection-content h15-widepicture-content">
         <div className="h15-widepicture-altspace-text pw">
           <div className="mindspace"><h6>MindSpace</h6></div>
            <div>Build your perfect workplace.</div>
         </div>
         <div className="h15-widepicture-tags h7">
            <Link to="#" className="h15-widepicture-tag pb">Pune</Link>
            <Link to="#" className="h15-widepicture-tag pb">Luknow</Link>
               <Link to="#" className="h15-widepicture-tag pb">More Cities</Link>
            <Link to="#" className="h15-widepicture-tag pb">Learn More</Link>
         </div>
      </div>
   </div>
   
 
   
   <div className="xsection">
      <div className="xsection-content h15-simplebooking">
         <div className="h4">Simple online booking on flexible terms.</div>
         <div className="h15-simplebooking-stats h3">
            <span className="h3b">18,000+</span> Available Spaces
            <span className="h15-simplebooking-stats-separator">|</span>
            <span className="h3b">9,500+</span> Verified Venue Partners
            <span className="h15-simplebooking-stats-separator">|</span>
            <span className="h3b">5.4</span> Million Secure Transactions
         </div>
         <div className="h15-simplebooking-illustration" data-bind="css: { 'h15-simplebooking-illustration--show': showIllustration }">
   <div className="h15-simplebooking-illustration-base">
      <div className="h15-lines-right"></div>
      <div className="h15-venuetype-wrapper h15-venuetype-private-business">
         <div className="h15-venuetype-text h5b">
            Private
            Business
         </div>
         <div className="h15-venuetype-dot"></div>
      </div>
      <div className="h15-venuetype-wrapper h15-venuetype-office-buildings">
         <div className="h15-venuetype-text h5b">
            Office
            Buildings
         </div>
         <div className="h15-venuetype-dot"></div>
      </div>
      <div className="h15-venuetype-wrapper h15-venuetype-coworking">
         <div className="h15-venuetype-text h5b">
            Coworking
         </div>
         <div className="h15-venuetype-dot"></div>
      </div>
      <div className="h15-venuetype-wrapper h15-venuetype-business-centers">
         <div className="h15-venuetype-text h5b">
            Business
            Centers
         </div>
         <div className="h15-venuetype-dot"></div>
      </div>

      <div className="h15-LS-space"></div>

      <div className="h15-lines-left"></div>
      <Link to="#" className="h15-customer h15-professionals-wrapper" >
         <div className="h15-customer-image h15-professionals"></div>
         <div className="h15-customer-text h5b">Professionals</div>
      </Link>
      <Link to="#" className="h15-customer h15-startups-wrapper" >
         <div className="h15-customer-image h15-startups"></div>
         <div className="h15-customer-text h5b">Startups</div>
      </Link>
      <Link to="#" className="h15-customer h15-corporate-teams-wrapper" >
         <div className="h15-customer-image h15-corporate-teams"></div>
         <div className="h15-customer-text h5b">
            Corporate
            Teams
         </div>
      </Link>
      <Link to="#" className="h15-customer h15-brokers-wrapper" >
         <div className="h15-customer-image h15-brokers"></div>
         <div className="h15-customer-text h5b">Brokers</div>
      </Link>
	  
      <div className="h15-search"></div>
	  <div className="h15-support"></div>
      <div className="h15-legal"></div>
      <div className="h15-payment"></div>
      <div className="h15-clouds"></div>
      <div className="h15-supply"></div>
   </div>
</div>
         <Link to="#" className="ocean-button h15-simplebooking-button" >How WorkSpace Works</Link>
      </div>
   </div>
   <div className="xsection h15-widepicture h15-widepicture-highlinehive" >
      <div className="xsection-content h15-widepicture-content">
         <div className="h15-widepicture-tags h7">
            
            <Link to="#" className="h15-widepicture-tag pb">Mumbai</Link>
            <Link to="#" className="h15-widepicture-tag pb">Hourly & Monthly</Link>
         </div>
      </div>
   </div>
   <div className="xsection">
      <div className="xsection-content h15-companies">
         <div className="h4">Trusted by dynamic companies worldwide.</div>
         <div className="h15-companies-wrapper">
            
            <div className="h15-company h15-company-uber"></div>
            <div className="h15-company h15-company-accenture"></div>
            <div className="h15-company h15-company-opera"></div>
			     <div className="h15-company h15-company-netflix"></div>
				  <div className="h15-company h15-company-salesforce"></div>
				  
				  
				   <div className="h15-company h15-company-wipro"></div>
            <div className="h15-company h15-company-ibm"></div>
            <div className="h15-company h15-company-icici"></div>
			     <div className="h15-company h15-company-mindtree"></div>
				  <div className="h15-company h15-company-infosys"></div>
				  
				  
         </div>
         <Link to="#" className="h15-companies-button ocean-button">Read Customer Stories</Link>
      </div>
   </div>
   <div className="xsection h15-widepicture h15-widepicture-covo" onClick="window.location.href='us/ca/san-francisco/covo-san-francisco.html'">
      <div className="xsection-content h15-widepicture-content">
         <div className="h15-widepicture-tags h7">
            <Link to="#" className="pb h15-widepicture-tag">Goa</Link>
            <Link to="#" className="pb h15-widepicture-tag">Noida</Link>
            <Link to="#" className="pb h15-widepicture-tag">Hourly & Monthly</Link>
         </div>
      </div>
   </div>
   <div className="xsection">
      <div className="xsection-content h15-news">
         <div className="h4">Latest Flexible Office News</div>
         <div className="h15-news-wrapper">
		 
		 
            <div className="h15-news-item">
               <div className="h15-news-item-image" style={{backgroundImage: "url(images/OfficeLeasing-by-industry.png)"}}></div>
               <div className="h15-news-item-content">
                  <div className="h15-news-item-title">Q4 2017 Flexible Office Report</div>
                  <div className="h15-news-item-contentbottom">
                     <Link to="#" className="h15-news-item-readmore h5b">Read More</Link>
                     <Link to="#" className="h15-news-item-category sb h7">Reports</Link>
                  </div>
               </div>
            </div>
            <div className="h15-news-item h15-news-item-customerstory">
               <div className="h15-news-item-image" style={{backgroundImage: "url(images/swig-hero-img.jpg)"}}></div>
               <div className="h15-news-item-content">
                  <div className="h15-news-item-title">Real Estate Firm Leverages WorkSpace Network & Platform</div>
                  <div className="h15-news-item-contentbottom">
                     <Link to="#" className="h15-news-item-readmore h5b">Read More</Link>
                     <Link to="#" className="h15-news-item-category sb h7">Case Studies</Link>
                  </div>
               </div>
            </div>
         
		 
            <div className="h15-news-item">
               <div className="h15-news-item-image" style={{backgroundImage: "url(images/OfficeLeasing-by-industry.png)"}}></div>
               <div className="h15-news-item-content">
                  <div className="h15-news-item-title">Q4 2017 Flexible Office Report</div>
                  <div className="h15-news-item-contentbottom">
                     <Link to="#" className="h15-news-item-readmore h5b">Read More</Link>
                     <Link to="#" className="h15-news-item-category sb h7">Reports</Link>
                  </div>
               </div>
            </div>
            <div className="h15-news-item h15-news-item-customerstory">
               <div className="h15-news-item-image" style={{backgroundImage:"url(images/swig-hero-img.jpg)"}}></div>
               <div className="h15-news-item-content">
                  <div className="h15-news-item-title">Real Estate Firm Leverages WorkSpace Network & Platform</div>
                  <div className="h15-news-item-contentbottom">
                     <Link to="#" className="h15-news-item-readmore h5b">Read More</Link>
                     <Link to="#" className="h15-news-item-category sb h7">Case Studies</Link>
                  </div>
               </div>
            </div>
         
		 
            <div className="h15-news-item">
               <div className="h15-news-item-image" style={{backgroundImage: "url(images/OfficeLeasing-by-industry.png)"}}></div>
               <div className="h15-news-item-content">
                  <div className="h15-news-item-title">Q4 2017 Flexible Office Report</div>
                  <div className="h15-news-item-contentbottom">
                     <Link to="#" className="h15-news-item-readmore h5b">Read More</Link>
                     <Link to="#" className="h15-news-item-category sb h7">Reports</Link>
                  </div>
               </div>
            </div>
            <div className="h15-news-item h15-news-item-customerstory">
               <div className="h15-news-item-image" style={{backgroundImage: "url(images/swig-hero-img.jpg)"}}></div>
               <div className="h15-news-item-content">
                  <div className="h15-news-item-title">Real Estate Firm Leverages WorkSpace Network & Platform</div>
                  <div className="h15-news-item-contentbottom">
                     <Link to="#" className="h15-news-item-readmore h5b">Read More</Link>
                     <Link to="#" className="h15-news-item-category sb h7">Case Studies</Link>
                  </div>
               </div>
            </div>
         
		 
		 
         </div>
         <Link to="#" className="ocean-inverted-button h15-news-button">More from the Blog</Link>
      </div>
	  
	  
   </div>
   <div className="xsection">
      <div className="xsection-content h15-signup">
         <div className="h3b">Sign up to receive WorkSpace news and special offers.</div>
         <div className="h15-signup-form">
               <div className="fl fl-i">
                  <input className="h15-signup-form-email" type="text" />
                  <label>Your email</label>
               </div>
            <button className="ocean-button h15-signup-form-button" data-bind="click: signUpForNews">Sign Up</button>
         </div>
         <div className="h5b h15-signedup-message"  style={{display: "none"}}>Great—you’re on the list!</div>
      </div>
   </div>
   <div className="h15-getstarted">
      <div className="h15-getstarted-spaces">
	  
<div className="h15-getstarted-spaces-row">
<Link to="#" className="h15-getstarted-space h15-getstarted-space-ignitedspaces"></Link>
<Link to="#" className="h15-getstarted-space h15-getstarted-space-level-office-420-w-huron-street-1"></Link>
<Link to="#" className="h15-getstarted-space h15-getstarted-space-raven-office-centers-388-market-1"></Link>
<Link to="#" className="h15-getstarted-space h15-getstarted-space-raven-office-centers-388-market-2"></Link>
</div>

<div className="h15-getstarted-spaces-row">
<Link to="#" className="h15-getstarted-space h15-getstarted-space-eco-systm"></Link>
<Link to="#" className="h15-getstarted-space h15-getstarted-space-primary-1"></Link>
<Link to="#" className="h15-getstarted-space h15-getstarted-space-primary-2"></Link>
<Link to="#" className="h15-getstarted-space h15-getstarted-space-level-office-420-w-huron-street-2"></Link>
</div>
		 
		 

      </div>
	  
      <div className="h15-getstarted-form">
         <div className="h4">Let’s get started.</div>
         <div className="h15-getstarted-form-buttons">
            <Link to="search.html" className="ocean-button h3b h15-getstarted-form-button">Browse Workspaces</Link>
            <Link to="#" className="ocean-button h3b h15-getstarted-form-button">Get Expert Advice</Link>
         </div>
      </div>
   </div>

</div>




            </div>
         </div>
      </div>
   </div>

   
<Footer/>

</div>
  )
  : (
          <div id="preloader">
        <div className="loader"></div>
        </div>
  )}

</div>
  );
}
}
export default IndexHome;