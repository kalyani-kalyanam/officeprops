import React from 'react';
import "./index.css";
import firebase from './config';
import {Link} from  "react-router-dom";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
           email:'',
           password:'',
            created_on: new Date().toLocaleString(),
            LoginDetails:[],
            loading:false,
           
           };
    }
    componentDidMount(){
    
        this.setState({loading:true});
      }
    handleSubmit=(event)=>{
        event.preventDefault();
       
        var ref = firebase.database().ref('LoginDetails');
         
        ref.push({ 
          
          email:this.state.email,
          password:this.state.password,
          created_on:this.state.created_on,
         
    
        }).then(res=>{
    
          
            this.props.history.push("/index_home");
           });
      
        
        };
        handleChange=(event)=>{
            console.log(event.target.value);
            this.setState({
             [ event.target.name]: event.target.value,
            });
          };
    
    
    render(){
        return(
            <div>    
 {this.state.loading
        ? ( 
 <div className="register register_page">

<div className="container-fluid">

<div className="container">
                <div className="row">
                    <div className="col-md-6 register-left">
                        <img src="images/logo.png" alt=""/>
                        <h3>Welcome</h3>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. </p>
                        <Link to="/register"><input type="submit" name="" className="btn hami-btn btn-3" value="Register"/></Link>
						<br></br>
                    </div>
                    <div className="col-md-6 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active" id="home-tab" data-toggle="tab"  role="tab" aria-controls="home" aria-selected="true">Signin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/App" className="nav-link"  >Home</Link>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" style={{background:"none"}}>
                              
                                <div className="row register-form">
                               
								  <div className="col-md-12 mb-10">

								  <h3 className="register-heading">Login Details</h3>
								  </div>
								
									   
								

									   
									  <form onSubmit={this.handleSubmit}>
							
									 <div className="col-md-12 mb-10">
									 
                            
							
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" placeholder="Your Email *" value={this.state.email} onChange={this.handleChange}/>
                                        </div>
										
										</div>
										
											    <div className="col-md-12 mb-10">

									   <div className="form-group">
                                            <input type="password" name="password" className="form-control" placeholder="Password *" value={this.state.password} onChange={this.handleChange}/>
                                        </div>
                                       </div>

										
								
								
										
										 <div className="col-md-12 mb-10">
                       
                                       <input type="submit" className="btn hami-btn btn-3" value="Login"/>
										
										</div>
                                      
										
										 <div className="col-md-12"><hr className="fullrow"/></div>
										

<div className="col-md-12">
<p>Register Using : </p>
<p><span className="fb">Facebook</span>
<span className="tw">Twitter</span>
<span className="gp">Google Plus</span></p>
</div>
                                       
                                       

										
</form>
                                    </div>
                                </div>
                            </div>
							
							

					   </div>
                    </div>
                </div>

            </div>

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
export default Login;