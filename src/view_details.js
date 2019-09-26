import React from 'react';
import "./index.css";
import {Link} from  "react-router-dom";
import HomeHeader from './homeheader';
import Footer from './footer';
class ViewDetails extends React.Component{
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
        return(
         <div>  
			  {this.state.loading
        ? (
    <div>
		
  
<HomeHeader/>

<div className="breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-content">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
<li className="breadcrumb-item"><Link to="#">Telangana</Link></li>
<li className="breadcrumb-item"><Link to="#">Hyderabad</Link></li>
<li className="breadcrumb-item"><Link to="#">Awfis</Link></li>
<li className="breadcrumb-item active" aria-current="page">Hi-Tech City 3</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
    <div className="hami--video--area">
        <div className="container">
		   <div className="row align-items-center">
        
        <div className="col-12 col-md-7 mt-30 mb-30">
          <div className="owl-carousel owl-theme">
            <div className="item scroll">
             <img src="images/img1-a.jpg"/>
            </div>
            <div className="item scroll">
             <img src="images/img1-b.jpg"/>
            </div>
            <div className="item scroll">
             <img src="images/img1-c.jpg"/>
            </div>
            <div className="item scroll">
             <img src="images/img1-d.jpg"/>
            </div>
           <div className="item scroll">
             <img src="images/img1-e.jpg"/>
            </div> 
            <div className="item scroll">
             <img src="images/img1-f.jpg"/>
            </div>
         </div>
       </div>
                <div className="col-12 col-md-5 mt-30 mb-30 ">
		             <div className="col-12 box-form databg">
                              <h1>Property Details</h1>
				<div className="row mb-10">
				<div className="col-md-5">Building Name:</div>
				<div className="col-md-7">Awfis</div>
				</div>
				
					<div className="row  mb-10">
				<div className="col-md-5">Location:</div>
				<div className="col-md-7">Hitech City</div>
				</div>
				
					<div className="row  mb-10">
				<div className="col-md-5">Area:</div>
				<div className="col-md-7">800 Sq ft</div>
				</div>
				
					<div className="row  mb-10">
				<div className="col-md-5">Price:</div>
				<div className="col-md-7">80000</div>
				</div>
				
				<div className="row  mb-10">
				<div className="col-md-5">Floor:</div>
				<div className="col-md-7">1st Floor</div>
				</div>
				
					<div className="row  mb-10">
				<div className="col-md-5">Address:</div>
				<div className="col-md-7">Level 4, N Heights, Plot No 38, Phase 2 HiTECH City, Hyderabad, TS 500081</div>
				</div>
				<div className="row mt-20">
			<div className="col-12">
            <Link to="shortlist"><button type="submit" className="btn hami-btn  btn-3">Add to Shortlist</button></Link>
             </div>
				</div>
			</div></div>
		 </div>
        {/* 2  */}
		    <div className="row">
               
                <div className="col-12">
                    <div className="section-heading text-left">
					
					<div className="box-property mb-20">
					<p className="orangebold"><b>Property Details</b></p>
					
						<div className="row mb-20">
					<div className="col-md-4 data-property">Floor<br></br><span>1st Floor</span></div>
					<div className="col-md-4 data-property">Units on Floor<br></br><span>12</span></div>
					<div className="col-md-4 data-property">Virtual Space<br></br><span>Available</span></div>
					</div>
					
					<div className="row mb-20">
					<div className="col-md-4 data-property">Super area<br></br><span>240 sqft</span></div>
					<div className="col-md-4 data-property">Carpet area<br></br><span>240 sqft</span></div>
					<div className="col-md-4 data-property">Plot area<br></br><span>240 sqft</span></div>
					</div>
					
					<div className="row mb-20">
					<div className="col-md-4 data-property">Furnished status<br></br><span>Furnished</span></div>
					<div className="col-md-4 data-property">Pantry<br></br><span>Wet Pantry</span></div>
					<div className="col-md-4 data-property">Washrooms<br></br><span>Yes</span></div>
					</div>
					
					<div className="row mb-20">
					<div className="col-md-4 data-property">Car parking<br></br><span>2 Covered</span></div>
					<div className="col-md-4 data-property">Ideal For<br></br><span>IT/ITES and Related,Private Office</span></div>
					<div className="col-md-4 data-property">Lifts<br></br><span>2</span></div>
					</div>
				</div>
					{/*   3   */}
						<div className="box-property  mb-20">
					<p className="orangebold"><b>Locality Details - Hitech City</b></p>
					<p> <b>Ratings</b> - <span className="orangebold">Rating 4.7/5</span></p>
					
								<div className="row mb-20">
					<div className="col-md-4 data-property">
					<p>ENVIRONMENT</p>
					<p>Neighborhood:
					<span className="yellow-star">
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star-half-o" aria-hidden="true"></i>
</span></p>
					<p>Roads:<span className="yellow-star">
					<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star-half-o" aria-hidden="true"></i>
					</span></p>
					<p>Safety:<span className="yellow-star">
					<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star-half-o" aria-hidden="true"></i>
					</span></p>
					<p>Cleanliness:<span className="yellow-star">
					<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star-half-o" aria-hidden="true"></i>
					
					</span></p>
					
					
					</div>
					<div className="col-md-4 data-property">
					<p>COMMUTING</p>
					<p>Public Transport:<span className="yellow-star">
					<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star-half-o" aria-hidden="true"></i>
					
					</span></p>
					<p>Parking:<span className="yellow-star">
					
					<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star-half-o" aria-hidden="true"></i>
					</span></p>
					<p>Connectivity:<span className="yellow-star">
					<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star-half-o" aria-hidden="true"></i>
					</span></p>
					<p>Traffic:<span className="yellow-star">
					<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star-half-o" aria-hidden="true"></i>
					</span></p>
					</div>
					<div className="col-md-4 data-property">
					<p>PLACES OF INTEREST</p>
<p>Schools:<span className="yellow-star">
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star-half-o" aria-hidden="true"></i>

</span></p>
					
<p>Restaurants:<span className="yellow-star">
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star-half-o" aria-hidden="true"></i>
</span></p>

<p>Hospital:<span className="yellow-star">
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star-half-o" aria-hidden="true"></i>
</span></p>
<p>Market:<span className="yellow-star">
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star" aria-hidden="true"></i>
<i className="fa fa-star-half-o" aria-hidden="true"></i>
</span></p>
</div>
					</div>
					
					
				<div className="row mb-20">
				<div className="col-12">
				<p><b>Reviews</b></p>
				<div className="reviews-row">
				<span>Krishna Kola<br></br></span>
				Hitech City is very good locality. It is very nice and beautiful locality. All basic amenities like hospitals, schools, colleges and markets are available nearby.The standard chunk of Lorem Ipsum used since the 1500s.
				</div>
					<div className="reviews-row">
				<span>Satya Pampana<br></br></span>
				Hitech City is very good locality. It is very nice and beautiful locality. All basic amenities like hospitals, schools, colleges and markets are available nearby.The standard chunk of Lorem Ipsum used since the 1500s.
				</div>
				
				<div className="fullrow"><Link to="#" className="review-all">View all 20 reviews <i className="fa fa-angle-double-right" aria-hidden="true"></i>
</Link></div>
	

				</div>	
				</div>	
					
					
					
					</div>
					
					
						<div className="box-property  mb-20">
					<p className="orangebold"><b>Agent Details</b></p>
					
					<p><b>Contact Person:</b> Sai Prasad</p>
<p><b>Company:</b> Aparna Constructions</p>
<p><b>Location:</b> Hyderabad, Andhra Pradesh, India
					</p>
					
					
					</div>


                  

					
					 <p><b>The Building</b></p>			
							    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for 
                                    those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                                     by Cicero are also reproduced in their exact original form, accompanied by English 
                                     versions from the 1914 translation by H. Rackham.</p>


                                   <p><b>The Office Space</b></p>
								
								    <p>Deploy your service infrastructure on our fully redundant, 
                                        high performance cloud platform and benefit from its high reliability,
                                        security and enterprise feature set. Easily enhance the performance.</p>
												
					
			</div>               
     </div>	
</div>
    
 </div>
</div>

<section className="hami-testimonial-area">


        <div className="container">
		<p><b>LOCATION</b></p>
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.02532044525!2d78.12785129924684!3d17.41215307568293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1567574109184!5m2!1sen!2sin" width="100%" height="500px" frameBorder="0" style={{border:"0"}} allowFullScreen=""></iframe>
         
	   </div>
    </section>



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
export default ViewDetails;