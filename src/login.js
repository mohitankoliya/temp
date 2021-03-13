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
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_footer: true,
            loader: true, data: [], message: '', phone: '', "errorName": "", success: false
        };
        this.onChange = this.onChange.bind(this)
    }
    isDisabled() {
        //logic to define if button should be disabled or not
        //return boolean true or false based on that

        return this.state.phone.length < 10


    }
    handleSubmit = async (event) => {
        // console.log("sxasxasx :"+JSON.stringify(this.state))
        event.preventDefault();
        var phone = await this.state.phone;
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var numformat = /^[0-9\b]+$/;

        this.setState({ successMSg: '' })
        if (phone === '' || phone === null) {
            this.setState({ "errorMsg": "Please Enter Phone", "errorName": "phone" });

        } else if (!phone.match(numformat)) {
           
            this.setState({ "errorMsg": "Please Enter Valid Phone number !", "errorName": "phone" });
        }
        else if (phone !== '') {
            var data = await new FormData();

            await data.append('user_phone', phone);
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
            //         this.setState({"phone": "" });
            //         this.setState({ "successMSg": "Your information has been send successfully", success: true, "errorMessage": false, "errorEmail": false, "errorName": false, "errorEmails": false });
            //     }).catch((error) => {
            //         console.log(error, "error")
            //     });
        }

    }
    async componentDidMount() {
        this.setState({ "loader": false });
    }
   
      onChange(e){
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({ phone: e.target.value })
        }
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
                                    <div className="logintext">Login</div>
                                    <div className="logcon">Enter Phone Number to Register Or Sign In</div>
                                    <div className="Loginfo">
                                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                                            <Form.Group size="lg" controlId="phone">
                                                <Form.Control className={`styled-input iccon ${this.state.errorName === "phone"&&this.state.errorMsg!="" && this.state.errorMsg!=undefined? "errorin" : ""}`}
                                                
                                                    type="tel" 
                                                  
                                                    value={this.state.phone} 
                                                    
                                                    onChange={this.onChange}
                                                    placeholder="Phone Number"
                                                />
                                            </Form.Group>
                                            <div className="styled-input">
                                                {this.state.errorName === "phone" &&
                                                    <h6 className="errormsg">{this.state.errorMsg}</h6>
                                                }
                                            </div>
                                            <div className="successMsg">
                                                {this.state.success &&
                                                    <h6>{this.state.successMSg}</h6>
                                                }
                                            </div>
                                           
                                            <Button className="conbut" type="submit" disabled={this.isDisabled()}>
                                                CONTINUE ➔  </Button>
                                            
                                            
                                            <div className="lowercon">By Signing up, you agree to our <span className="colo">&nbsp; Terms and Conditions</span></div>
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
export default Login;
