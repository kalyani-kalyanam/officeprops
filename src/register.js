import React from 'react';
import "./index.css";
// import "./register.css";
import firebase from './config';
import {Link} from  "react-router-dom";

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
           name:'',
           email:'',
           password:'',
           phoneno:'',
           propertyType:'wantProperty',
           propertyValue:'',
           created_on: new Date().toLocaleString(),
           RegistrationDetails:[],
           loading:false,
           
           };
    }
    componentDidMount(){
    
          this.setState({loading:true});
        }

    handleSubmit=(event)=>{
        event.preventDefault();
      
        var ref = firebase.database().ref('RegistrationDetails');
       
        ref.push({ 
          name:this.state.name,
          email:this.state.email,
          password:this.state.password,
          phoneno:this.state.phoneno,
          propertyType:this.state.propertyType,
          propertyValue:this.state.propertyValue,
          created_on:this.state.created_on,
         
    
        }).then(res=>{
    
          
            this.props.history.push("/index_home");
           });
      
      //  console.log("RegistrationDetails");
        };




    handleChange=(event)=>{
        console.log(event.target.value);
        this.setState({
         [ event.target.name]: event.target.value,
        });
        console.log(this.state.propertyType);
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
                        <Link to="/login"><input type="submit" name="" className="btn hami-btn btn-3" value="Login"/></Link><br></br>
                    </div>
                    <div className="col-md-6 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <Link to="/home"  className="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/index" className="nav-link">Home</Link>
                            </li>
                        </ul>
<div className="row register-form">
             	<div className="col-md-12 mb-10">
				<h3 className="register-heading">Registration Details</h3>
				</div>
                <form className="col-md-12" onSubmit={this.handleSubmit}>    
                <div className="row ">				
	    <h3 className="register-heading"></h3>
          
            <div className="col-md-6 mb-10">
			<div className="form-group">
            <input type="text" className="form-control" name="name" placeholder="First Name *" value={this.state.name} onChange={this.handleChange}/>
           </div>
			</div>
										
								
			<div className="col-md-6 mb-10">
            <div className="form-group">
            <input type="email" className="form-control" name="email" placeholder="Your Email *" value={this.state.email} onChange={this.handleChange}/>
             </div>
			</div>
          

            <div className="col-md-6 mb-10">
            <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password *" value={this.state.password} onChange={this.handleChange}/>
            </div>
           </div>

           <div className="col-md-6 mb-10">
            <div className="form-group">
            <input type="text" className="form-control" name="phoneno" placeholder="Mobile Number *" value={this.state.phoneno} onChange={this.handleChange}/>
            </div>
           </div>

           

                                     
<div className="col-md-12">
<div className="row">

<div className="col-md-6 mb-20">
<div className="custom-control custom-radio">
<input type="radio" className="custom-control-input" id="wantrentproperty1" name="propertyType" value="wantProperty" checked={this.state.propertyType === "wantProperty"}  onChange={this.handleChange}/>
<label className="custom-control-label" for="wantrentproperty1">Want Property</label>
</div>
</div>
<div className="col-md-6 mb-20">
<div className="custom-control custom-radio">
<input type="radio"  className="custom-control-input" id="wantrentproperty2" name="propertyType" value="rentProperty" checked={this.state.propertyType === "rentProperty"}  onChange={this.handleChange}/>
<label className="custom-control-label" for="wantrentproperty2">Rent Property</label>
</div>
</div>
</div>
</div>
{this.state.propertyType=="wantProperty"?										
<div className="col-md-12 register-radio" id="userregister2">
<div className="row">
<div className="col-md-2 mb-20">I am</div>
<div className="col-md-3 mb-20">

<div className="custom-control custom-radio">
<input type="radio" className="custom-control-input" id="defaultGroupExample4" name="propertyValue" value="Entrepreneur" checked={this.state.propertyValue === "Entrepreneur"}  onChange={this.handleChange}/>
<label className="custom-control-label" for="defaultGroupExample4">Entrepreneur</label>
</div>
</div>
<div className="col-md-4 mb-20 pl-25">
<div className="custom-control custom-radio">
<input type="radio" className="custom-control-input" id="defaultGroupExample5" name="propertyValue" value="Business Man" checked={this.state.propertyValue === "Business Man"}  onChange={this.handleChange}/>
<label className="custom-control-label" for="defaultGroupExample5">Business Man</label>
</div>
</div>
<div className="col-md-3 mb-20">
<div className="custom-control custom-radio">
<input type="radio" className="custom-control-input" id="defaultGroupExample6" name="propertyValue" value="Company" checked={this.state.propertyValue === "Company"}  onChange={this.handleChange}/>
<label className="custom-control-label" for="defaultGroupExample6">Company</label>
</div>
</div>
</div>
</div>
:


<div className="col-md-12 register-radio" id="userregister3" >
<div className="row">
<div className="col-md-2 mb-20">I am</div>
<div className="col-md-3 mb-20">

<div className="custom-control custom-radio">
<input type="radio" className="custom-control-input" id="defaultGroupExample1" name="propertyValue" value="Owner" checked={this.state.propertyValue === "Owner"}  onChange={this.handleChange} />
<label className="custom-control-label" for="defaultGroupExample1">Owner</label>
</div>
</div>
<div className="col-md-3 mb-20">
<div className="custom-control custom-radio">
<input type="radio" className="custom-control-input" id="defaultGroupExample2" name="propertyValue" value="Broker" checked={this.state.propertyValue === "Broker"}  onChange={this.handleChange} />
<label className="custom-control-label" for="defaultGroupExample2">Broker</label>
</div>
</div>
<div className="col-md-4 mb-20">
<div className="custom-control custom-radio">
<input type="radio" className="custom-control-input" id="defaultGroupExample3" name="propertyValue" value="Entrepreneur" checked={this.state.propertyValue === "Entrepreneur"}  onChange={this.handleChange} />
<label className="custom-control-label" for="defaultGroupExample3">Entrepreneur</label>
</div>
</div>
</div>
</div>}

<div className="col-md-12">
   <input type="submit" className="btn hami-btn btn-3" value="Register"/>
										
</div>
</div>
</form>
 <div className="col-md-12"><hr className="fullrow"></hr></div>
										

<div className="col-md-12">
<p>Register Using : </p>
<p><span className="fb">Facebook</span>
<span className="tw">Twitter</span>
<span className="gp">Google Plus</span></p>
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
export default Register;