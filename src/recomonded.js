import React from 'react';
import "./index.css";
import {Link} from  "react-router-dom";
import HomeHeader from './homeheader';
import Footer from './footer';
class Recomonded extends React.Component{
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
<div className="col-md-12">
	<h5 className="my_title"><b>Recomonded Office Spaces</b></h5>
</div>

</div>

<div className="row">


<div className="home_wrapper col-md-12">
<div className="search-item-box">
<div className="img-swiper left"><img src="images/img1-a.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box right">

<div className="row">
	
<div className="col-md-5">
<h6><strong>Sri Hemadurga Sivahills</strong></h6>
<p className="area_name">
<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
Panjagutta<br></br>
1000 sft Office Space<br></br>
<p><strong>Rs 50,000/-</strong> onwards</p>
</p>
</div>

<div className="col-md-4">
<h6><strong>Address</strong></h6>
<p className="area_name">
H.no 1-20-248, <br></br>1st floor, Survey no.44,<br></br> Rasoolpura, Secunderabad,<br></br> Telangana, <br></br>India- 500003
</p>

</div>


<div className="col-md-3">
<div className="col-12 mb-20 mt-20">
                                        <Link to="/shortlist"><button type="submit" className="btn hami-btn select smallbtn btn-3">Shortlist</button></Link>
										
										
                                </div>
								
								<div className="col-12">
                                    <Link to="/view_details"><button type="submit" className="btn hami-btn smallbtn btn-3">View Details</button></Link>
                                </div>

</div>

</div>


</div>

</div>
</div>

<div className="home_wrapper col-md-12">
<div className="search-item-box">
<div className="img-swiper left"><img src="images/img1-b.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box right">

<div className="row">
	
<div className="col-md-5">
<h6><strong>Sri Hemadurga Sivahills</strong></h6>
<p className="area_name">
<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
Panjagutta<br></br>
1000 sft Office Space<br></br>
<p><strong>Rs 50,000/-</strong> onwards</p>
</p>
</div>

<div className="col-md-4">
<h6><strong>Address</strong></h6>
<p className="area_name">
H.no 1-20-248, <br></br>1st floor, Survey no.44,<br></br> Rasoolpura, Secunderabad,<br></br> Telangana, <br></br>India- 500003
</p>

</div>


<div className="col-md-3">
<div className="col-12 mb-20 mt-20">
                                        <Link to="/shortlist"><button type="submit" className="btn hami-btn select smallbtn btn-3">Shortlist</button></Link>
										
										
                                </div>
								
								<div className="col-12">
                                       <Link to="/view_details"><button type="submit" className="btn hami-btn smallbtn btn-3">View Details</button></Link>
                                </div>

</div>

</div>


</div>

</div>
</div>



<div className="home_wrapper col-md-12">
<div className="search-item-box">
<div className="img-swiper left"><img src="images/img1-c.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box right">

<div className="row">
	
<div className="col-md-5">
<h6><strong>Sri Hemadurga Sivahills</strong></h6>
<p className="area_name">
<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
Panjagutta<br></br>
1000 sft Office Space<br></br>
<p><strong>Rs 50,000/-</strong> onwards</p>
</p>
</div>

<div className="col-md-4">
<h6><strong>Address</strong></h6>
<p className="area_name">
H.no 1-20-248, <br></br>1st floor, Survey no.44,<br></br> Rasoolpura, Secunderabad,<br></br> Telangana, <br></br>India- 500003
</p>

</div>


<div className="col-md-3">
<div className="col-12 mb-20 mt-20">
                                        <Link to="/shortlist"><button type="submit" className="btn hami-btn select smallbtn btn-3">Shortlist</button></Link>
                                </div>
								
								<div className="col-12">
                                      <Link to="/view_details"><button type="submit" className="btn hami-btn smallbtn btn-3">View Details</button></Link>
                                </div>

</div>

</div>


</div>

</div>
</div>




<div className="home_wrapper col-md-12">
<div className="search-item-box">
<div className="img-swiper left"><img src="images/img1-d.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box right">

<div className="row">
	
<div className="col-md-5">
<h6><strong>Sri Hemadurga Sivahills</strong></h6>
<p className="area_name">
<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
Panjagutta<br></br>
1000 sft Office Space<br></br>
<p><strong>Rs 50,000/-</strong> onwards</p>
</p>
</div>

<div className="col-md-4">
<h6><strong>Address</strong></h6>
<p className="area_name">
H.no 1-20-248, <br></br>1st floor, Survey no.44,<br></br> Rasoolpura, Secunderabad,<br></br> Telangana, <br></br>India- 500003
</p>

</div>


<div className="col-md-3">
<div className="col-12 mb-20 mt-20">
                                        <Link to="/shortlist"><button type="submit" className="btn hami-btn select smallbtn btn-3">Shortlist</button></Link>
                                </div>
								
								<div className="col-12">
                                   <Link to="/view_details"><button type="submit" className="btn hami-btn smallbtn btn-3">View Details</button></Link>
                                </div>

</div>

</div>


</div>

</div>
</div>



<div className="home_wrapper col-md-12">
<div className="search-item-box">
<div className="img-swiper left"><img src="images/img1-e.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box right">

<div className="row">
	
<div className="col-md-5">
<h6><strong>Sri Hemadurga Sivahills</strong></h6>
<p className="area_name">
<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
Panjagutta<br></br>
1000 sft Office Space<br></br>
<p><strong>Rs 50,000/-</strong> onwards</p>
</p>
</div>

<div className="col-md-4">
<h6><strong>Address</strong></h6>
<p className="area_name">
H.no 1-20-248, <br></br>1st floor, Survey no.44,<br></br> Rasoolpura, Secunderabad,<br></br> Telangana, <br></br>India- 500003
</p>

</div>


<div className="col-md-3">
<div className="col-12 mb-20 mt-20">
                                       <Link to="/shortlist"><button type="submit" className="btn hami-btn select smallbtn btn-3">Shortlist</button></Link>
                                </div>
								
								<div className="col-12">
                                       <Link to="/view_details"><button type="submit" className="btn hami-btn smallbtn btn-3">View Details</button></Link>
                                </div>

</div>

</div>


</div>

</div>
</div>




<div className="home_wrapper col-md-12">
<div className="search-item-box">
<div className="img-swiper left"><img src="images/img1-f.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box right">

<div className="row">
	
<div className="col-md-5">
<h6><strong>Sri Hemadurga Sivahills</strong></h6>
<p className="area_name">
<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
Panjagutta<br></br>
1000 sft Office Space<br></br>
<p><strong>Rs 50,000/-</strong> onwards</p>
</p>
</div>

<div className="col-md-4">
<h6><strong>Address</strong></h6>
<p className="area_name">
H.no 1-20-248, <br></br>1st floor, Survey no.44,<br></br> Rasoolpura, Secunderabad,<br></br> Telangana, <br></br>India- 500003
</p>

</div>


<div className="col-md-3">
<div className="col-12 mb-20 mt-20">
                                       <Link to="/shortlist"><button type="submit" className="btn hami-btn select smallbtn btn-3">Shortlist</button></Link>
                                </div>
								
								<div className="col-12">
                                       <Link to="/view_details"><button type="submit" className="btn hami-btn smallbtn btn-3">View Details</button></Link>
                                </div>

</div>

</div>


</div>

</div>
</div>



<div className="home_wrapper col-md-12">
<div className="search-item-box">
<div className="img-swiper left"><img src="images/img1-a.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box right">

<div className="row">
	
<div className="col-md-5">
<h6><strong>Sri Hemadurga Sivahills</strong></h6>
<p className="area_name">
<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
Panjagutta<br></br>
1000 sft Office Space<br></br>
<p><strong>Rs 50,000/-</strong> onwards</p>
</p>
</div>

<div className="col-md-4">
<h6><strong>Address</strong></h6>
<p className="area_name">
H.no 1-20-248, <br></br>1st floor, Survey no.44,<br></br> Rasoolpura, Secunderabad,<br></br> Telangana, <br></br>India- 500003
</p>

</div>


<div className="col-md-3">
<div className="col-12 mb-20 mt-20">
                                       <Link to="/shortlist"><button type="submit" className="btn hami-btn select smallbtn btn-3">Shortlist</button></Link>
                                </div>
								
								<div className="col-12">
                                      <Link to="/view_details"><button type="submit" className="btn hami-btn smallbtn btn-3">View Details</button></Link>
                                </div>

</div>

</div>


</div>

</div>
</div>



<div className="home_wrapper col-md-12">
<div className="search-item-box">
<div className="img-swiper left"><img src="images/img1-b.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box right">

<div className="row">
	
<div className="col-md-5">
<h6><strong>Sri Hemadurga Sivahills</strong></h6>
<p className="area_name">
<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
Panjagutta<br></br>
1000 sft Office Space<br></br>
<p><strong>Rs 50,000/-</strong> onwards</p>
</p>
</div>

<div className="col-md-4">
<h6><strong>Address</strong></h6>
<p className="area_name">
H.no 1-20-248, <br></br>1st floor, Survey no.44,<br></br> Rasoolpura, Secunderabad,<br></br> Telangana, <br></br>India- 500003
</p>

</div>


<div className="col-md-3">
<div className="col-12 mb-20 mt-20">
                                       <Link to="/shortlist"><button type="submit" className="btn hami-btn select smallbtn btn-3">Shortlist</button></Link>
                                </div>
								
								<div className="col-12">
                                       <Link to="/view_details"><button type="submit" className="btn hami-btn smallbtn btn-3">View Details</button></Link>
                                </div>

</div>

</div>


</div>

</div>
</div>



<div className="home_wrapper col-md-12">
<div className="search-item-box">
<div className="img-swiper left"><img src="images/img1-c.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box right">

<div className="row">
	
<div className="col-md-5">
<h6><strong>Sri Hemadurga Sivahills</strong></h6>
<p className="area_name">
<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
Panjagutta<br></br>
1000 sft Office Space<br></br>
<p><strong>Rs 50,000/-</strong> onwards</p>
</p>
</div>

<div className="col-md-4">
<h6><strong>Address</strong></h6>
<p className="area_name">
H.no 1-20-248, <br></br>1st floor, Survey no.44,<br></br> Rasoolpura, Secunderabad,<br></br> Telangana, <br></br>India- 500003
</p>

</div>


<div className="col-md-3">
<div className="col-12 mb-20 mt-20">
                        <Link to="/shortlist"><button type="submit" className="btn hami-btn select smallbtn btn-3">Shortlist</button></Link>
                                </div>
								
								<div className="col-12">
                                      <Link to="/view_details"><button type="submit" className="btn hami-btn smallbtn btn-3">View Details</button></Link>
                                </div>

</div>

</div>


</div>

</div>
</div>



<div className="home_wrapper col-md-12">
<div className="search-item-box">
<div className="img-swiper left"><img src="images/img1-d.jpg"/>
<div className="data"><span>Hyderabad</span></div>
</div>

<div className="details_box right">

<div className="row">
	
<div className="col-md-5">
<h6><strong>Sri Hemadurga Sivahills</strong></h6>
<p className="area_name">
<span className="flate_title">BRC Infra Pvt. Ltd.</span><br></br>
Panjagutta<br></br>
1000 sft Office Space<br></br>
<p><strong>Rs 50,000/-</strong> onwards</p>
</p>
</div>

<div className="col-md-4">
<h6><strong>Address</strong></h6>
<p className="area_name">
H.no 1-20-248, <br></br>1st floor, Survey no.44,<br></br> Rasoolpura, Secunderabad,<br></br> Telangana, <br></br>India- 500003
</p>

</div>


<div className="col-md-3">
<div className="col-12 mb-20 mt-20">

    <Link to="/shortlist"><button type="submit" className="btn hami-btn select smallbtn btn-3">Shortlist</button></Link>
	
	
	
                                </div>
								
								<div className="col-12">
                                       <Link to="/view_details"><button type="submit" className="btn hami-btn smallbtn btn-3">View Details</button></Link>
                                </div>

</div>

</div>


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
export default Recomonded;