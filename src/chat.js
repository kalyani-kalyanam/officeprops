import React from 'react';
import "./index.css";
//import {Link} from  "react-router-dom";
import "./chat.css";
import HomeHeader from './homeheader';
import Footer from './footer';
class Chat extends React.Component{
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

<div className="container mt-50 mb-50">
			<div className="row justify-content-center">
			
			
			<div className="col-md-6">
			
			
				<div className="col-12 box-form">
				<h1 style={{fontSize:"25px"}}>Awfis | Hi-Tech City 3</h1>
				
				
				
				
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.02532044525!2d78.12785129924684!3d17.41215307568293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1567574109184!5m2!1sen!2sin" width="100%" height="170px" frameBorder="0" style={{border:"0"}} allowFullScreen=""></iframe>       
                                 
                            
                                </div>
				</div>
				
				
		
			
			
				
				
				</div></div>
				
				
			
			
				
				<div className="col-md-6 chat">
					<div className="card">
						<div className="card-header msg_head">
							<div className="d-flex bd-highlight">
								<div className="img_cont">
									<img src="images/profile-pic.jpg" className="rounded-circle user_img"/>
									<span className="online_icon"></span>
								</div>
								<div className="user_info">
									<span>Chat with Awfis</span>
									<p className="m-0">1767 Messages</p>
								</div>
								<div className="video_cam">
									<span><i className="fas fa-video"></i></span>
									<span><i className="fas fa-phone"></i></span>
								</div>
							</div>
							<span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
							<div className="action_menu">
								<ul>
									<li><i className="fas fa-user-circle"></i> View profile</li>
									<li><i className="fas fa-users"></i> Add to close friends</li>
									<li><i className="fas fa-plus"></i> Add to group</li>
									<li><i className="fas fa-ban"></i> Block</li>
								</ul>
							</div>
						</div>
						<div className="card-body msg_card_body">
							<div className="d-flex justify-content-start mb-4">
								<div className="img_cont_msg">
									<img src="images/profile-chat.jpg" className="rounded-circle user_img_msg"/>
								</div>
								<div className="msg_cotainer">
									Hi, how are you samim?
									<span className="msg_time">8:40 AM, Today</span>
								</div>
							</div>
							<div className="d-flex justify-content-end mb-4">
								<div className="msg_cotainer_send">
									Hi Maryam i am good tnx how about you?
									<span className="msg_time_send">8:55 AM, Today</span>
								</div>
									<div className="img_cont_msg">
						<img src="images/profile-chat2.jpg" className="rounded-circle user_img_msg"/>
								</div>
							</div>
							<div className="d-flex justify-content-start mb-4">
								<div className="img_cont_msg">
									<img src="images/profile-chat.jpg" className="rounded-circle user_img_msg"/>
								</div>
								<div className="msg_cotainer">
									I am good too, thank you for your chat template
									<span className="msg_time">9:00 AM, Today</span>
								</div>
							</div>
							<div className="d-flex justify-content-end mb-4">
								<div className="msg_cotainer_send">
									You welcome Maryam
									<span className="msg_time_send">9:05 AM, Today</span>
								</div>
									<div className="img_cont_msg">
						<img src="images/profile-chat2.jpg" className="rounded-circle user_img_msg"/>
								</div>
							</div>
							<div className="d-flex justify-content-start mb-4">
								<div className="img_cont_msg">
									<img src="images/profile-chat.jpg" className="rounded-circle user_img_msg"/>
								</div>
								<div className="msg_cotainer">
									I am looking for your next templates
									<span className="msg_time">9:07 AM, Today</span>
								</div>
							</div>
							<div className="d-flex justify-content-end mb-4">
								<div className="msg_cotainer_send">
									Ok, thank you have a good day
									<span className="msg_time_send">9:10 AM, Today</span>
								</div>
								<div className="img_cont_msg">
						<img src="images/profile-chat2.jpg" className="rounded-circle user_img_msg"/>
								</div>
							</div>
							<div className="d-flex justify-content-start mb-4">
								<div className="img_cont_msg">
									<img src="images/profile-chat.jpg" className="rounded-circle user_img_msg"/>
								</div>
								<div className="msg_cotainer">
									Bye, see you
									<span className="msg_time">9:12 AM, Today</span>
								</div>
							</div>
						</div>
						<div className="card-footer">
							<div className="input-group">
							
								<textarea name="" className="form-control type_msg" placeholder="Type your message..."></textarea>
								<div className="input-group-append">
									<span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>




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
export default Chat;