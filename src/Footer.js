import React, { Component } from 'react';

import 'idempotent-babel-polyfill';
import renderHTML from 'react-render-html';
// import { backgroundImage, get_json } from './common';
// import { connect } from 'react-redux'

// import { withRouter } from 'react-router';
import { withRouter } from "react-router-dom";
const backgroundImage = require('./image/App Store.png');
class Footer extends Component {
	render() {
		return (
			<footer className="footer w-left">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-6">
							<div className="footer-topp">
								Making you look Awesome & Beautiful
						</div>
							<div className="footer-topp-content">
								With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
						</div>
						</div>
						<div className="col-sm-12 col-md-6">
							<div className="footer-topp-content">
								{/* <img className="logo_image" src="./image/App Store.png" alt="Awesome" /> */}
								<div >
									<div className="center">

										<div className="StoreImage1">

										</div>
										<div className="StoreImage2">

										</div>

									</div>
								</div>


								{/* <img className="logo_image" src={this.state.logo_image} alt="Awesome" /> */}
							</div>
						</div>
					</div>
					<hr className="new1"></hr>
					<div className="row">
						<div className="col-sm-12 col-md-4 footr_col footer-left">
							<div className="headd">Instacuts</div>
							<p className="footer_sec_content">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
						</div>
						<div className="col-6 col-md-2">
							<h5 className="text-head">Home</h5>
							<div className="text-inner">
								<div><a className="text-muted" href="#">How It Work</a></div>
								<div><a className="text-muted" href="#">Features</a></div>
								<div><a className="text-muted" href="#">Testimonial</a></div>
							</div>
						</div>
						<div className="col-6 col-md-2">
							<h5 className="text-head">Stylist</h5>
							<div className="text-inner">
								<div><a className="text-muted" href="#">Become a Stylist</a></div>
								<div><a className="text-muted" href="#">Benefit</a></div>
								<div><a className="text-muted" href="#">Safety</a></div>

							</div>
						</div>
						<div className="col-6 col-md-2">
							<h5 className="text-head">Safety</h5>
							<div className="text-inner">
								<div><a className="text-muted" href="#">Safety</a></div>
								<div><a className="text-muted" href="#">Customer Safety</a></div>
								<div><a className="text-muted" href="#">Stylist Safety</a></div>

							</div>
						</div>
						<div className="col-6 col-md-2">
							<h5 className="text-head">Company</h5>
							<div className="text-inner">
								<div><a className="text-muted" href="#">FAQs</a></div>
								<div><a className="text-muted" href="#">Contact Us</a></div>
								<div><a className="text-muted" href="#">About Us</a></div>
							</div>
						</div>
					</div>
				</div>
			</footer>





			// <footer className="footer w-left">
			// 	<div className="container">
			// 		<div className="row">
			// 			<div className="col-sm-12 col-md-4 ">
			// 				<div className="logo_img">
			// 				<p className="footer-font">Instacuts </p>
			// 				</div>
			// 				<p className="footer_sec_content">
			// 					With lots of unique blocks, you can easily build a page without coding.  Build your next landing page.
			// 				</p>

			// 			</div>
			// 			<div className="col-sm-12 col-md-2 footr_col sign-gd">
			// 				<h4 className="hidden-xs">Quick <span>Links</span></h4>

			// 				<div className="footerCont" style={{ display: '' }}>
			// 					<div className="menu__item menu__item--current"><a className="menu__link" onClick={()=>{ this.props.history.push("/")}}>Login</a></div>
			// 					<div className="menu__item"><a className="menu__link" >About us</a></div>
			// 					<div className="menu__item"><a className="menu__link" >Contact us</a></div>
			// 					<div className="menu__item"><a className="menu__link">Gallery</a></div>
			// 					<div className="menu__item"><a className="menu__link" >Blog</a></div>
			// 				</div>
			// 			</div>
			// 			<div className="col-sm-12 col-md-2 footr_col sign-gd">
			// 				<h4 className="hidden-xs">Quick <span>Links</span></h4>

			// 				<div className="footerCont" style={{ display: '' }}>
			// 					<div className="menu__item menu__item--current"><a className="menu__link" onClick={()=>{ this.props.history.push("/")}}>Login</a></div>
			// 					<div className="menu__item"><a className="menu__link" >About us</a></div>
			// 					<div className="menu__item"><a className="menu__link" >Contact us</a></div>
			// 					<div className="menu__item"><a className="menu__link">Gallery</a></div>
			// 					<div className="menu__item"><a className="menu__link" >Blog</a></div>
			// 				</div>
			// 			</div>
			// 			<div className="col-sm-12 col-md-2 footr_col sign-gd">
			// 				<h4 className="hidden-xs">Quick <span>Links</span></h4>

			// 				<div className="footerCont" style={{ display: '' }}>
			// 					<div className="menu__item menu__item--current"><a className="menu__link" onClick={()=>{ this.props.history.push("/")}}>Login</a></div>
			// 					<div className="menu__item"><a className="menu__link" >About us</a></div>
			// 					<div className="menu__item"><a className="menu__link" >Contact us</a></div>
			// 					<div className="menu__item"><a className="menu__link">Gallery</a></div>
			// 					<div className="menu__item"><a className="menu__link" >Blog</a></div>
			// 				</div>
			// 			</div>
			// 			<div className="col-sm-12 col-md-2 footr_col sign-gd">
			// 				<h4 className="hidden-xs">Quick <span>Links</span></h4>

			// 				<div className="footerCont" style={{ display: '' }}>
			// 					<div className="menu__item menu__item--current"><a className="menu__link" onClick={()=>{ this.props.history.push("/")}}>Login</a></div>
			// 					<div className="menu__item"><a className="menu__link" >About us</a></div>
			// 					<div className="menu__item"><a className="menu__link" >Contact us</a></div>
			// 					<div className="menu__item"><a className="menu__link">Gallery</a></div>
			// 					<div className="menu__item"><a className="menu__link" >Blog</a></div>
			// 				</div>
			// 			</div>
			// 		</div>

			// 	</div>
			// </footer>

		)
	}

}

export default Footer;

