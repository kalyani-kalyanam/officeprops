import React from 'react';
import "./index.css";
import {Link} from  "react-router-dom";
import HomeHeader from './homeheader';
import Footer from './footer';
class Selected extends React.Component{
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

<div className="hami--video--area">
        <div className="container">
		
        
           
            <div className="row align-items-center">
			<div className="col-12 mt-30"><h2>Awfis | Hi-Tech City 3</h2></div>
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
            </div> <div className="item scroll">
             <img src="images/img1-f.jpg"/>
            </div>
         </div>
     </div>
                <div className="col-12 col-md-5 mt-30 mb-30 ">
		
				<div className="col-12 box-form paymentbox">
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
				<div className="col-md-5">Address	:</div>
				<div className="col-md-7">Level 4, N Heights, Plot No 38, Phase 2 HiTECH City, Hyderabad, TS 500081</div>
				</div>
				<div className="row mt-20">
			<div className="col-12">
                       
                                    <Link to="#"><button type="submit" className="btn hami-btn  btn-3">Make Payment</button></Link>
                            
                                </div>
				</div>
				
				
		
			
			
				
				
				</div></div>
				
				
             
            </div>
        



</div></div>




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
export default Selected;