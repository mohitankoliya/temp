import React, { Component, Suspense } from 'react';
import "./css/bootstrap.min.css";
import "./css/style.css";


// import { connect } from 'react-redux'
import Loader from './Loader'
// import { get_json } from './common';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './login';

import { Helmet } from "react-helmet";
import OTPauth from './otpauthentication';
import Loginwithpassword from './loginwithpassword';
import Register from './register';
import DefaultPro from './defaultprofile';
import Home from './home';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [], loader: true };
	}
	async componentDidMount() {
		// console.log("Suspense", this.state)
		window.addEventListener('scroll', (event) => {
			var scrollpos = window.scrollY;
			var max_scrollpos = 130
			var class_name = '';
			if (scrollpos > max_scrollpos) {
				// document.body.classList.add("darktheme");
				class_name = 'sticked';
			} else {
				class_name = '';
				// document.body.classList.remove("darktheme");
			}
			this.setState({
				activeClass: class_name
			})
		});
	}
	render() {
		// console.log(this.state)
		return (
			<Router basename="/reactjs-website">
				{/* {this.state.site_title&&<Helmet>
					<title>{this.state.site_title}</title>
				</Helmet>} */}
				{
					// (this.state.loader || this.state.data === null) ?
					// 	<Loader></Loader>
					// 	:
					<>
						<Router>
						<Switch>
							<Route exact path='/' component={Login} />
							<Route exact path='/otpauth' component={OTPauth} />
							<Route exact path='/loginwithpassword' component={Loginwithpassword} />
							<Route exact path='/register' component={Register} />
							<Route exact path='/defaultpro' component={DefaultPro} />
							<Route exact path='/home' component={Home} />
							</Switch>
						</Router>
					</>
				}
			</Router>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		alldata: state.responseJson,
// 	}
// }
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setresponseJson: (data) => dispatch({ type: "ALL_RESPONSE", payload: data }),
// 	};
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

