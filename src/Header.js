import React, { Component } from 'react';

// import 'idempotent-babel-polyfill';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}

	render() {
		return (
			<div className="container navclass">
				<Navbar bg="white" variant="white" expand="lg" className="pdr">
					<div className="col-sm-12 col-md-3" className="pdr2">
						<Nav.Link href="/" className="logo_image"></Nav.Link>
					</div>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link className="colornav" href="/home">HOME</Nav.Link>
							<Nav.Link className="colornav" href="/about-us">STYLIST</Nav.Link>
							<Nav.Link className="colornav" href="/contact-us">SAFETY</Nav.Link>
							<Nav.Link className="colornav" href="/contact-us">FAQ</Nav.Link>
							<Nav.Link className="colornav" href="/contact-us">GET APP</Nav.Link>
							<Nav.Link className="colornav" href="/contact-us">CONTACT</Nav.Link>
							<Nav.Link className="colornav" href="/contact-us">ABOUT US</Nav.Link>
						</Nav>
						<div className="leftt">
							<Nav.Link className="colornav" href="/#" className="round">CONTINUE WITH MOBILE APP ➔</Nav.Link>
						</div>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}
export default Header;