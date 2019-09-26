import React from 'react';
import "./index.css";
import {Link} from  "react-router-dom";
import HomeHeader from './homeheader';
import Footer from './footer';
class SearchResults extends React.Component{
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

  

<div className="home_Container">

<div className="container">

<div className="row">

<div className="col-md-12 mt-20 mb-20">
<div className="searchbar h5b">
<div className="addressbar">
               <input placeholder="Enter a city" type="text" value="Secunderabad, Telangana, India"/>
     </div>
	 
<div className="monthdropdown">
Monthly
<span className="downarrow">
<img src="images/down-arrow.png"/>
</span>
</div>
<div className="datedropdown">
<span className="downarrow">
<img src="images/down-arrow.png"/>
</span>
4th Sept 2019
</div>
<div className="fiterbutton">
Search
</div>

</div>
</div>

<div className="col-md-12">
	<h5 className="my_title"><b>Search Results</b></h5>
</div>

</div>

<div className="row">


<div className="home_wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-a.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box">
	<h6><strong>Sri Hemadurga Sivahills</strong></h6>
	<p className="area_name">
		<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
		Puppalaguda<br></br>
		1000 Square Feet Office Space<br></br>
		<p><strong>Rs 9,000/-</strong> onwards</p>
	</p>
</div>

<div className="swiper-details">
<Link to="/view_details"><button type="submit" className="btn hami-btn select smallbtn btn-3">View Details</button></Link>
</div>
</div>
</div>

<div className="home_wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-b.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box">
	<h6><strong>Sri Hemadurga Sivahills</strong></h6>
	<p className="area_name">
		<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
		Puppalaguda<br></br>
		1000 Square Feet Office Space<br></br>
		<p><strong>Rs 9,000/-</strong> onwards</p>
	</p>
</div>

<div className="swiper-details">
<Link to="/view_details"><button type="submit" className="btn hami-btn select smallbtn btn-3">View Details</button></Link>
</div>
</div>
</div>



<div className="home_wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-c.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box">
	<h6><strong>Sri Hemadurga Sivahills</strong></h6>
	<p className="area_name">
		<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
		Puppalaguda<br></br>
		1000 Square Feet Office Space<br></br>
		<p><strong>Rs 9,000/-</strong> onwards</p>
	</p>
</div>

<div className="swiper-details">
<Link to="/view_details"><button type="submit" className="btn hami-btn select smallbtn btn-3">View Details</button></Link>
</div>
</div>
</div>




<div className="home_wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-d.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box">
	<h6><strong>Sri Hemadurga Sivahills</strong></h6>
	<p className="area_name">
		<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
		Puppalaguda<br></br>
		1000 Square Feet Office Space<br></br>
		<p><strong>Rs 9,000/-</strong> onwards</p>
	</p>
</div>

<div className="swiper-details">
<Link to="/view_details"><button type="submit" className="btn hami-btn select smallbtn btn-3">View Details</button></Link>
</div>
</div>
</div>



<div className="home_wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-e.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box">
	<h6><strong>Sri Hemadurga Sivahills</strong></h6>
	<p className="area_name">
		<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
		Puppalaguda<br></br>
		1000 Square Feet Office Space<br></br>
		<p><strong>Rs 9,000/-</strong> onwards</p>
	</p>
</div>

<div className="swiper-details">
<Link to="/view_details"><button type="submit" className="btn hami-btn select smallbtn btn-3">View Details</button></Link>
</div>
</div>
</div>


<div className="home_wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-f.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box">
	<h6><strong>Sri Hemadurga Sivahills</strong></h6>
	<p className="area_name">
		<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
		Puppalaguda<br></br>
		1000 Square Feet Office Space<br></br>
		<p><strong>Rs 9,000/-</strong> onwards</p>
	</p>
</div>

<div className="swiper-details">
<Link to="/view_details"><button type="submit" className="btn hami-btn select smallbtn btn-3">View Details</button></Link>
</div>
</div>
</div>


<div className="home_wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-a.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box">
	<h6><strong>Sri Hemadurga Sivahills</strong></h6>
	<p className="area_name">
		<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
		Puppalaguda<br></br>
		1000 Square Feet Office Space<br></br>
		<p><strong>Rs 9,000/-</strong> onwards</p>
	</p>
</div>

<div className="swiper-details">
<Link to="/view_details"><button type="submit" className="btn hami-btn select smallbtn btn-3">View Details</button></Link>
</div>
</div>
</div>



<div className="home_wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-b.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box">
	<h6><strong>Sri Hemadurga Sivahills</strong></h6>
	<p className="area_name">
		<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
		Puppalaguda<br></br>
		1000 Square Feet Office Space<br></br>
		<p><strong>Rs 9,000/-</strong> onwards</p>
	</p>
</div>

<div className="swiper-details">
<Link to="/view_details"><button type="submit" className="btn hami-btn select smallbtn btn-3">View Details</button></Link>
</div>
</div>
</div>


<div className="home_wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-c.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box">
	<h6><strong>Sri Hemadurga Sivahills</strong></h6>
	<p className="area_name">
		<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
		Puppalaguda<br></br>
		1000 Square Feet Office Space<br></br>
		<p><strong>Rs 9,000/-</strong> onwards</p>
	</p>
</div>

<div className="swiper-details">
<Link to="/view_details"><button type="submit" className="btn hami-btn select smallbtn btn-3">View Details</button></Link>
</div>
</div>
</div>

<div className="home_wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-d.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box">
	<h6><strong>Sri Hemadurga Sivahills</strong></h6>
	<p className="area_name">
		<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
		Puppalaguda<br></br>
		1000 Square Feet Office Space<br></br>
		<p><strong>Rs 9,000/-</strong> onwards</p>
	</p>
</div>

<div className="swiper-details">
<Link to="/view_details"><button type="submit" className="btn hami-btn select smallbtn btn-3">View Details</button></Link>
</div>
</div>
</div>


</div></div></div>

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
export default SearchResults;