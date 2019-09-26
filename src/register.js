import React from 'react';
import "./index.css";
// import "./register.css";
import firebase from './config';
import {Link} from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            confirm_password: "",
            contact_number: '',
            propertyType: 'wantProperty',
            propertyValue: '',
            created_on: new Date().toLocaleString(),
            RegistrationDetails: [],
            loading: false,
            validError:false,

        };
        this.validator = new SimpleReactValidator({
            className: "text-danger",
            validators: {
                passwordvalid: {
                    message: "The :attribute must be at least 6 and at most 30 with 1 numeric,1 special charac" +
                            "ter and 1 alphabet.",
                    rule: function (val, params, validator) {
                        // return validator.helpers.testRegex(val,/^[a-zA-Z0-9]{6,30}$/i) &&
                        // params.indexOf(val) === -1
                        return (validator.helpers.testRegex(val, /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,30}$/i) && params.indexOf(val) === -1);
                    }
                },
                passwordMismatch: {
                    message: "confirm password must match with password field.",
                    rule: function (val, params, validator) {
                        return document
                            .getElementById("password_input")
                            .value === val
                            ? true
                            : false;
                    }
                },
                whitespace: {
                    message: "The :attribute not allowed first whitespace   characters.",
                    rule: function (val, params, validator) {
                        // return validator.helpers.testRegex(val,/^[a-zA-Z0-9]{6,30}$/i) &&
                        // params.indexOf(val) === -1
                        return (validator.helpers.testRegex(val, /[^\s\\]/) && params.indexOf(val) === -1);
                    }
                },
                specialChar: {
                    message: "The :attribute not allowed special   characters.",
                    rule: function (val, params, validator) {
                        // return validator.helpers.testRegex(val,/^[a-zA-Z0-9]{6,30}$/i) &&
                        // params.indexOf(val) === -1
                        return (validator.helpers.testRegex(val, /^[ A-Za-z0-9_@./#&+-]*$/i) && params.indexOf(val) === -1);
                    }
                },
                specialCharText: {
                    message: "The :attribute may only contain letters, dot and spaces.",
                    rule: function (val, params, validator) {
                        // return validator.helpers.testRegex(val,/^[a-zA-Z0-9]{6,30}$/i) &&
                        // params.indexOf(val) === -1
                        return (validator.helpers.testRegex(val, /^[ A-Za-z_@./#&+-]*$/i) && params.indexOf(val) === -1);
                    }
                }
            }
        });
    }
    componentDidMount() {

        this.setState({loading: true});
    }
    handleChange = (event) => {
      
        this.setState({
            [event.target.name]: event.target.value
        });
       
    };
    handleSubmit = (event) => {
        event.preventDefault();

        if (this.validator.allValid() && this.state.validError === true) {

            var user = null;

            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((result) => {

                    var userId = result.user;
                    user = firebase
                        .auth()
                        .currentUser;
                    user.sendEmailVerification();
                    console.log(user);
                    let dbCon = firebase
                        .database()
                        .ref('users/' + userId.uid);
                    dbCon
                        .set({
                        fullName: this.state.fullName,
                        emailId: this.state.email,
                        password: this.state.password,
                        contactNumber: this.state.contact_number,
                        propertyType: this.state.propertyType,
                        propertyValue: this.state.propertyValue,
                        createdOn: this.state.created_on
                    })
                        .then((result) => {
                            this.setState({
                                validError:true,
                            });
                            this.props.history.push("./login")
                        })

                })
                .catch(error => {
                    this.setState({error});
                    console.log(this.state.error);
                    this.setState({employer_sevice_message: this.state.error.message});
                });

        } else {
            this
                .validator
                .showMessages();
            this.forceUpdate();
        }

    };

    
    phoneNumberChange  = (e) => {
        this.setState({
            contact_number: e.target.value
        });
        if(e.target.value.length==10){
           
            
            var ref = firebase
            .database()
            .ref('users/').orderByChild("contactNumber").equalTo(e.target.value);
            ref.on('value', snapshot => {
                var  user_exist = snapshot.numChildren();
                console.log(user_exist);
           
            if(user_exist>0){
               
               
                this.setState({mobile_message: "Mobile number already exist",validError:false});
            }else{
                this.setState({mobile_message: "",validError:true});
               
            }
           
        })
    }
       
    };
    render() {
        return (
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
                                            <p>
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took.
                                            </p>
                                            <Link to="/login"><input type="submit" name="" className="btn hami-btn btn-3" value="Login"/></Link>
                                            <br></br>
                                        </div>
                                        <div className="col-md-6 register-right">
                                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <Link
                                                        to="/home"
                                                        className="nav-link active"
                                                        id="home-tab"
                                                        data-toggle="tab"
                                                        role="tab"
                                                        aria-controls="home"
                                                        aria-selected="true">Register</Link>
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
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="fullName"
                                                                    placeholder="Full Name *"
                                                                    value={this.state.fullName}
                                                                    onChange={this.handleChange}/> {this
                                                                    .validator
                                                                    .message("Full Name", this.state.fullName, "required|specialCharText|whitespace|min:2|max:70")}

                                                            </div>
                                                        </div>

                                                        <div className="col-md-6 mb-10">
                                                            <div className="form-group">
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    name="email"
                                                                    placeholder="Your Email *"
                                                                    value={this.state.email}
                                                                    onChange={this.handleChange}/> {this
                                                                    .validator
                                                                    .message("Email", this.state.email, "required|email|min:6|max:70")}
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6 mb-10">
                                                            <div className="form-group">
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    name="password"
                                                                    placeholder="Password *"
                                                                    value={this.state.password}
                                                                    onChange={this.handleChange} id="password_input"/> {this
                                                                    .validator
                                                                    .message("Password", this.state.password, "required|passwordvalid|min:6|max:30")}

                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-10">
                                                            <div className="form-group">
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    name="confirm_password"
                                                                    placeholder="Confirm Password *"
                                                                    value={this.state.confirm_password}
                                                                    onChange={this.handleChange}/> {this
                                                                    .validator
                                                                    .message("Confirm Password", this.state.confirm_password, "required|passwordMismatch")}

                                                            </div>
                                                        </div>

                                                        <div className="col-md-6 mb-10">
                                                            <div className="form-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="contact_number"
                                                                    placeholder="Mobile Number *"
                                                                    value={this.state.contact_number}
                                                                    onChange={this.phoneNumberChange}/> {this
                                                                    .validator
                                                                    .message("Contact Number", this.state.contact_number, "required|phone|min:10|max:10")}
                                                            <div className="text-danger">
                                                        {" "}
                                                        {this.state.mobile_message}
                                                    </div></div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="row">

                                                                <div className="col-md-6 mb-20">
                                                                    <div className="custom-control custom-radio">
                                                                        <input
                                                                            type="radio"
                                                                            className="custom-control-input"
                                                                            id="wantrentproperty1"
                                                                            name="propertyType"
                                                                            value="wantProperty"
                                                                            checked={this.state.propertyType === "wantProperty"}
                                                                            onChange={this.handleChange}/>
                                                                        <label className="custom-control-label" htmlFor="wantrentproperty1">Want Property</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-20">
                                                                    <div className="custom-control custom-radio">
                                                                        <input
                                                                            type="radio"
                                                                            className="custom-control-input"
                                                                            id="wantrentproperty2"
                                                                            name="propertyType"
                                                                            value="rentProperty"
                                                                            checked={this.state.propertyType === "rentProperty"}
                                                                            onChange={this.handleChange}/>
                                                                        <label className="custom-control-label" htmlFor="wantrentproperty2">Rent Property</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {this.state.propertyType == "wantProperty"
                                                            ? <div className="col-md-12 register-radio" id="userregister2">
                                                                    <div className="row">
                                                                        <div className="col-md-2 mb-20">I am</div>
                                                                        <div className="col-md-3 mb-20">

                                                                            <div className="custom-control custom-radio">
                                                                                <input
                                                                                    type="radio"
                                                                                    className="custom-control-input"
                                                                                    id="defaultGroupExample4"
                                                                                    name="propertyValue"
                                                                                    value="Entrepreneur"
                                                                                    checked={this.state.propertyValue === "Entrepreneur"}
                                                                                    onChange={this.handleChange}/>
                                                                                <label className="custom-control-label" htmlFor="defaultGroupExample4">Entrepreneur</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4 mb-20 pl-25">
                                                                            <div className="custom-control custom-radio">
                                                                                <input
                                                                                    type="radio"
                                                                                    className="custom-control-input"
                                                                                    id="defaultGroupExample5"
                                                                                    name="propertyValue"
                                                                                    value="Business Man"
                                                                                    checked={this.state.propertyValue === "Business Man"}
                                                                                    onChange={this.handleChange}/>
                                                                                <label className="custom-control-label" htmlFor="defaultGroupExample5">Business Man</label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 mb-20">
                                                                            <div className="custom-control custom-radio">
                                                                                <input
                                                                                    type="radio"
                                                                                    className="custom-control-input"
                                                                                    id="defaultGroupExample6"
                                                                                    name="propertyValue"
                                                                                    value="Company"
                                                                                    checked={this.state.propertyValue === "Company"}
                                                                                    onChange={this.handleChange}/>
                                                                                <label className="custom-control-label" htmlFor="defaultGroupExample6">Company</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {this
                                                                    .validator
                                                                    .message("property Value", this.state.propertyValue, "required")}
                                                                </div>
                                                            : <div className="col-md-12 register-radio" id="userregister3">
                                                                <div className="row">
                                                                    <div className="col-md-2 mb-20">I am</div>
                                                                    <div className="col-md-3 mb-20">

                                                                        <div className="custom-control custom-radio">
                                                                            <input
                                                                                type="radio"
                                                                                className="custom-control-input"
                                                                                id="defaultGroupExample1"
                                                                                name="propertyValue"
                                                                                value="Owner"
                                                                                checked={this.state.propertyValue === "Owner"}
                                                                                onChange={this.handleChange}/>
                                                                            <label className="custom-control-label" htmlFor="defaultGroupExample1">Owner</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-3 mb-20">
                                                                        <div className="custom-control custom-radio">
                                                                            <input
                                                                                type="radio"
                                                                                className="custom-control-input"
                                                                                id="defaultGroupExample2"
                                                                                name="propertyValue"
                                                                                value="Broker"
                                                                                checked={this.state.propertyValue === "Broker"}
                                                                                onChange={this.handleChange}/>
                                                                            <label className="custom-control-label" htmlFor="defaultGroupExample2">Broker</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 mb-20">
                                                                        <div className="custom-control custom-radio">
                                                                            <input
                                                                                type="radio"
                                                                                className="custom-control-input"
                                                                                id="defaultGroupExample3"
                                                                                name="propertyValue"
                                                                                value="Entrepreneur"
                                                                                checked={this.state.propertyValue === "Entrepreneur"}
                                                                                onChange={this.handleChange}/>
                                                                            <label className="custom-control-label" htmlFor="defaultGroupExample3">Entrepreneur</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {this
                                                                    .validator
                                                                    .message("property Value", this.state.propertyValue, "required")}
                                                            </div>}

                                                        <div className="col-md-12">
                                                            <input type="submit" className="btn hami-btn btn-3" value="Register"/>

                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="col-md-12">
                                                    <hr className="fullrow"></hr>
                                                </div>

                                                <div className="col-md-12">
                                                    <p>Register Using :
                                                    </p>
                                                    <p>
                                                        <span className="fb">Facebook</span>
                                                        <span className="tw">Twitter</span>
                                                        <span className="gp">Google Plus</span>
                                                    </p>
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
                    )
            } 
            </div>
            

        );
    }
}
export default Register;