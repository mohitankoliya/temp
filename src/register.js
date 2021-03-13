/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import 'idempotent-babel-polyfill';
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Suspense } from 'react';
import Loader from './Loader'
import Header from './Header';
import Form from "react-bootstrap/Form";
import { Route, Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_footer: true,
            loader: true, data: [], message: '',
            fname: '', lname: '', email: '', phone: '', password: '', dob: '', gender: '', "errorName": "", success: false
        };
        this.onChange = this.onChange.bind(this)
    }
    isDisabled() {
        //logic to define if button should be disabled or not
        //return boolean true or false based on that
        return this.state.password.length < 6
    }
    handleSubmit = async (event) => {
        // console.log("sxasxasx :"+JSON.stringify(this.state))
        event.preventDefault();
        var password = await this.state.password;
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var numformat = /^[0-9\b]+$/;

        this.setState({ successMSg: '' })
        if (password === '' || password === null) {
            this.setState({ "errorMsg": "Please Enter Phone", "errorName": "password" });

        } else if (!password.match(numformat)) {

            this.setState({ "errorMsg": "Please Enter Valid Phone number !", "errorName": "password" });
        }
        else if (password !== '') {
            var data = await new FormData();

            await data.append('user_phone', password);
            // await data.append('user_message', message);
            await data.append('admin_email', this.state.data.email);
            await data.append('user_id', this.state.data.user_id);
            // <Link to='/otpauth'></Link>
            this.props.history.push("/otpauth")
            // const requestOptions = {
            //     method: 'POST',
            //     mode: 'no-cors',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         "Access-Control-Allow-Origin": "*",
            //     },
            //     body: data,
            // };

            // fetch("https://demo.softpulseinfotech.com/reactjs-website/admin_cms/react_mail.php", requestOptions)
            //     .then((response) => response.json()).then(async (responseJson) => {
            //         console.log(responseJson, "responseJson")
            //         this.setState({"password": "" });
            //         this.setState({ "successMSg": "Your information has been send successfully", success: true, "errorMessage": false, "errorEmail": false, "errorName": false, "errorEmails": false });
            //     }).catch((error) => {
            //         console.log(error, "error")
            //     });
        }

    }
    async componentDidMount() {
        this.setState({ "loader": false });
    }

    onChange(e) {
        // const re = /^[0-9\b]+$/;
        // if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({ password: e.target.value })
        // }
    }
    render() {

        let renderArr = this.state.renderArr;
        return (
            // <Suspense fallback={<Loader></Loader>}>
            <div>
                <Header />
                {/* {(renderArr !== undefined && renderArr.length > 0 && renderArr !== null) &&
                        renderArr.map((block, i) => (
                            <div key={i}>
                                {block.value}
                            </div>
                        ))
                    } */
                    <div className="fullpage">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-3"></div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="logintext">Getting Started</div>
                                    <div className="logcon">Create an account to continue!</div>
                                    <div className="Loginfo">
                                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <div>
                                                        <div className="bbol">
                                                            First Name </div>
                                                        <Form.Group size="lg" controlId="fname">
                                                            <Form.Control className="styled-input"
                                                                type="text"
                                                                value={this.state.fname}
                                                                onChange={(e) => this.setState({ fname: e.target.value })}
                                                                placeholder="First Name"
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div>
                                                        <div className="bbol">
                                                            Last Name </div>
                                                        <Form.Group size="lg" controlId="lname">
                                                            <Form.Control className="styled-input"
                                                                type="text"
                                                                value={this.state.lname}
                                                                onChange={(e) => this.setState({ lname: e.target.value })}
                                                                placeholder="Last Name"
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bbol">
                                                Email </div>
                                            <Form.Group size="lg" controlId="email">
                                                <Form.Control className="styled-input"
                                                    type="text"
                                                    value={this.state.email}
                                                    onChange={(e) => this.setState({ email: e.target.value })}
                                                    placeholder="Email"
                                                />
                                            </Form.Group>
                                            <div className="bbol">
                                                Phone Number </div>
                                            <Form.Group size="lg" controlId="phone">
                                                <Form.Control className={`styled-input ${this.state.errorName === "phone" && this.state.errorMsg != "" && this.state.errorMsg != undefined ? "errorin" : ""}`}
                                                    type="tel"
                                                    value={this.state.phone}
                                                    onChange={this.onChange}
                                                    placeholder="Phone Number"
                                                />
                                            </Form.Group>
                                            <div className="bbol">
                                                Password </div>
                                            <Form.Group size="lg" controlId="password">
                                                <Form.Control className={`styled-input icconnp ${this.state.errorName === "password" && this.state.errorMsg != "" && this.state.errorMsg != undefined ? "errorin" : ""}`}
                                                    type="password"
                                                    value={this.state.password}
                                                    onChange={this.onChange}
                                                    placeholder="Password"
                                                />
                                            </Form.Group>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <div>
                                                        <div className="bbol">
                                                            Date of Birth </div>
                                                        <Form.Group size="lg" controlId="dob">
                                                            <Form.Control className="styled-input "
                                                                type="date"
                                                                dateFormat="DDD, DD MMM YYYY"
                                                                value={this.state.dob}
                                                                onChange={(e) => this.setState({ dob: e.target.value })}
                                                                placeholder="Date of Birth"
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div>
                                                        <div className="bbol">
                                                            Gender </div>
                                                        <Form.Group size="lg" controlId="gender">
                                                            <Form.Control className="drpn"
                                                                as="select"
                                                                custom
                                                                onChange={(e) => this.setState({ gender: e.target.value })}
                                                                value={this.state.gender}>
                                                                <option value="Male">Male</option>
                                                                <option value="Female">Female</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styled-input">
                                                {this.state.errorName === "password" &&
                                                    <h6 className="errormsg">{this.state.errorMsg}</h6>
                                                }
                                            </div>
                                            <div className="successMsg">
                                                {this.state.success &&
                                                    <h6>{this.state.successMSg}</h6>
                                                }
                                            </div>
                                            <Link to='/defaultpro'><Button className="conbut" type="submit"
                                            //  disabled={this.isDisabled()}
                                             >
                                                CREATE ACCOUNT ➔  </Button></Link>
                                            <div className="lowercon">Already have an account ?   <span className="colo"> &nbsp; Login</span></div>
                                        </Form>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                </div>
                            </div>
                            <div className="row row2">
                            </div>
                        </div>
                    </div>
                }
                {(this.state.is_footer) &&
                    <Footer />
                }
            </div>
            // </Suspense>
        );
    }
}
export default Register;
