import React from 'react';
import "./index.css";
import {Link} from  "react-router-dom";
import Header from './header';
class Search extends React.Component{
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
  

   
   <Header/>

<div className="left-side">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.02532044525!2d78.12785129924684!3d17.41215307568293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1567574109184!5m2!1sen!2sin" width="800" height="100%" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
</div>


<div className="right-side">

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
Filter
</div>

</div>


<div className="templateContainer">

<div className="h5b extended-section-title">These locations have spaces that fit your needs and may have availability.</div>





<div className="search-list-item-wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-c.jpg"/>

<div className="data"><span>Regus | SLN Terminus<br></br>SLN Terminus, Miyapur Rd, 8th Floor, Hyderabad, Telangana 500032</span></div>

</div>
<div className="swiper-details"><Link to="/details">View Details</Link></div>
</div>
</div>


<div className="search-list-item-wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-d.jpg"/>

<div className="data"><span>Regus |  HiTech - Krishe Sapphire<br></br>Krishe Sapphire, Hitech City Road, Madhapur, 7th Floor, Hyderabad, Hyderabad 500081</span></div>

</div>
<div className="swiper-details"><Link to="/details">View Details</Link></div>
</div>
</div>


<div className="search-list-item-wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-e.jpg"/>
<div className="data"><span>Regus | Hitech City<br></br> Inorbit Mall Rd, Hyderabad, Telangana 500081</span></div>

</div>
<div className="swiper-details"><Link to="/details">View Details</Link></div>
</div>
</div>


<div className="search-list-item-wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-f.jpg"/>
<div className="data">
<span>Regus | Begumpet<br></br>Gumidelli Towers, Begumpet, 4th floor, Hyderabad, Telangana 500016</span></div>

</div>
<div className="swiper-details"><Link to="/details">View Details</Link></div>
</div>
</div>



<div className="search-list-item-wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-a.jpg"/>
<div className="data"><span>Taj Deccan <br></br>Taj Deccan Hotel, E- Floor, Road No 1 Banjara Hills , Hyderabad, TS 500034</span></div>

</div>
<div className="swiper-details"><Link to="/details">View Details</Link></div>
</div>
</div>


<div className="search-list-item-wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-b.jpg"/>

<div className="data"><span>Regus | Uppal<br></br>Uppal business centre, 1st Floor, Hyderabad, Telangana 500039</span></div>

</div>
<div className="swiper-details"><Link to="/details">View Details</Link></div>
</div>
</div>


<div className="search-list-item-wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-c.jpg"/>
<div className="data"><span>Regus | Mid-Town<br></br>1st Floor Mid Town Plaza, Hyderabad, Telangana 500033</span></div>

</div>
<div className="swiper-details"><Link to="/details">View Details</Link></div>
</div>
</div>



<div className="search-list-item-wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-d.jpg"/>

<div className="data"><span>Awfis | Hi-Tech City 2<br></br>Level 1, N Heights, Plot No 38, Phase 2 HiTECH City , Hyderabad, TS 500081</span></div>
</div>
<div className="swiper-details"><Link to="/details">View Details</Link></div>
</div>
</div>


<div className="search-list-item-wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-e.jpg"/>

<div className="data"><span>Awfis | Hi-Tech City 3<br></br>Level 4, N Heights, Plot No 38, Phase 2 HiTECH City, Hyderabad, TS 500081</span></div>


</div>
<div className="swiper-details"><Link to="/details">View Details</Link></div>
</div>
</div>


<div className="search-list-item-wrapper">
<div className="search-item-box">
<div className="img-swiper"><img src="images/img1-f.jpg"/>
<div className="data"><span>Regus | Manjeera Trinity<br></br> eSeva Ln, Hyderabad, Telangana 500072</span></div>

</div>
<div className="swiper-details"><Link to="/details">View Details</Link></div>
</div>
</div>



</div></div>
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
export default Search;