import React from 'react';
import "./index.css";
import Header from './header';
import Footer from './footer';
class Details extends React.Component{
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
    <div className="breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-content">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
<li className="breadcrumb-item"><a href="#">Telangana</a></li>
<li className="breadcrumb-item"><a href="#">Hyderabad</a></li>
<li className="breadcrumb-item"><a href="#">Awfis</a></li>
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
            </div> <div className="item scroll">
             <img src="images/img1-f.jpg"/>
            </div>
    
           
          </div>
        

  


       
   

                       
                   
                </div>
                <div className="col-12 col-md-5 mt-30 mb-30 box-form">
                    <div className="video-text">
                        <h2>Let our Space Experts check availability for you.</h2>
                       
                        <div className="video-desc">
						
						<form action="#" method="post">
                            <div className="row">
					


					
<div className="col-12 col-lg-6">
<select  className="form-control mb-30">
<option value="Desk">For How Long?</option>
<option value="Desk">Not Sure</option>
<option value="Office">1 month or more</option>
<option value="Office">3 months or more</option>
<option value="Office">6 months or more</option>
<option value="Office">1 year or more</option>
</select>
</div>

								
								 
								 <div className="col-12 col-lg-6">
                                    <input type="text"  className="form-control mb-30" placeholder="For How Many People?"/>
                                </div>
								
							
							
                                <div className="col-12 col-lg-6">
                                    <input type="text"  className="form-control mb-30" placeholder="Your Name"/>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <input type="email" className="form-control mb-30" placeholder="Email"/>
                                </div>
								
								   <div className="col-12 col-lg-6">
                                    <input type="number" className="form-control mb-30" placeholder="Pnone Number"/>
                                </div>
								
									<div className="col-12">
                                    <textarea name="message" className="form-control mb-30" placeholder="Anything else we should know?"></textarea>
                                </div>
								
								
                                
                                <div className="col-12">
                                    <button type="submit" className="btn hami-btn btn-3">Send Query</button>
                                </div>
                            </div>
                        </form>
						
						
                        
                        </div>
                    </div>
                </div>
            </div>
        
		    <div className="row">
                
                <div className="col-12">
                    <div className="section-heading text-left">
					
					<h2>Awfis | Hi-Tech City 3</h2>
<p className="address">Level 4, N Heights, Plot No 38, Phase 2 HiTECH City, Hyderabad, TS 500081</p>
					
                      
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
						
						    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

</p>
							
							    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

</p>
								
								    <p>Deploy your service infrastructure on our fully redundant, high performance cloud platform and benefit from its high reliability, security and enterprise feature set. Easily enhance the performance.</p>
									
									<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</p>
						
					
						
						
                    </div>
                </div>
            </div>

		
		
		</div>
    </div>



<section className="hami-testimonial-area">


        <div className="container">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.02532044525!2d78.12785129924684!3d17.41215307568293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1567574109184!5m2!1sen!2sin" width="100%" height="500px" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
         
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
export default Details;