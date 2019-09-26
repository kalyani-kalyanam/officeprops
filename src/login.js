import React from 'react';
import "./index.css";
import firebase from './config';
import {Link} from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            created_on: new Date().toLocaleString(),
            LoginDetails: [],
            loading: false,
            employer_sevice_message: ""
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
                }
            }
        });
    }
    componentDidMount() {

        this.setState({loading: true});
    }
    handleSubmit = (event) => {
        event.preventDefault();

        if (this.validator.allValid()) {

            const {email, password} = this.state;

            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((result) => {

                    var user = result.user;
                    console.log(user);
                    var ref = firebase
                        .database()
                        .ref(`users/${user.uid}`);
                    ref.on('value', snapshot => {
                        var gstData = snapshot.val();
                        console.log(gstData);
                        if (gstData.role == "Users" && gstData.status == "Active") {
                            console.log(user.uid);
                            if (user.emailVerified == true) {
                                sessionStorage.setItem("userId", user.uid);
                                sessionStorage.setItem("fullName", gstData.fullName);
                                sessionStorage.setItem("emailId", gstData.emailId);
                                sessionStorage.setItem("contactNumber", gstData.contactNumber);

                                this
                                    .props
                                    .history
                                    .push("/");

                            } else {
                                this.setState({employer_sevice_message: "your email id is not verified. please verify your email"});

                            }
                        } else {
                            this.setState({employer_sevice_message: "Invalid username/Password"});
                        }

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
    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
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
                                            <Link to="/register"><input type="submit" name="" className="btn hami-btn btn-3" value="Register"/></Link>
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
                                                        aria-selected="true">Signin</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/App" className="nav-link">Home</Link>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="myTabContent">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="home"
                                                    role="tabpanel"
                                                    aria-labelledby="home-tab"
                                                    style={{
                                                    background: "none"
                                                }}>

                                                    <div className="row register-form">

                                                        <div className="col-md-12 mb-10">

                                                            <h3 className="register-heading">Login Details</h3>
                                                        </div>

                                                        <form onSubmit={this.handleSubmit}>

                                                            <div className="col-md-12 mb-10">

                                                                <div className="form-group">
                                                                    <input
                                                                        type="email"
                                                                        name="email"
                                                                        className="form-control"
                                                                        placeholder="Your Email *"
                                                                        value={this.state.email}
                                                                        onChange={this.handleChange}/> {this
                                                                        .validator
                                                                        .message("Email Address", this.state.email, "required|email|min:6|max:70")}
                                                                </div>

                                                            </div>

                                                            <div className="col-md-12 mb-10">

                                                                <div className="form-group">
                                                                    <input
                                                                        type="password"
                                                                        name="password"
                                                                        className="form-control"
                                                                        placeholder="Password *"
                                                                        value={this.state.password}
                                                                        onChange={this.handleChange}/> {this
                                                                        .validator
                                                                        .message("Password", this.state.password, "required|passwordvalid|min:6|max:30")}

                                                                </div>
                                                            </div>

                                                            {this.state.employer_sevice_message
                                                                ? (
                                                                    <div className="alert alert-warning" role="alert">
                                                                        {this.state.employer_sevice_message}
                                                                    </div>
                                                                )
                                                                : ("")}{" "}

                                                            <div className="col-md-12 mb-10">

                                                                <input type="submit" className="btn hami-btn btn-3" value="Login"/>

                                                            </div>

                                                            <div className="col-md-12"><hr className="fullrow"/></div>

                                                            <div className="col-md-12">
                                                                <p>Register Using :
                                                                </p>
                                                                <p>
                                                                    <span className="fb">Facebook</span>
                                                                    <span className="tw">Twitter</span>
                                                                    <span className="gp">Google Plus</span>
                                                                </p>
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
                    )
            } </div>

        );
    }
}
export default Login;