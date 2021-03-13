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
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
class OTPauth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {}, seconds: 60,
            is_footer: true,
            loader: true, data: [], message: '', phone: '',
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: '',
            sixth: '',
            otp: '', "errorName": "", success: false
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.OTPInput = this.OTPInput.bind(this);
    }
    isDisabled() {
        //logic to define if button should be disabled or not
        //return boolean true or false based on that

        return this.state.phone.length < 10


    }
    handleSubmit = async (event) => {
        console.log("here : "+this.state)
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
    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }
    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }
    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            console.log(this.state)
            this.timer = setInterval(this.countDown, 1000);
        }
    }
    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }

    OTPInput() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        // console.log(inputs.length)
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('keydown', function (event) {
                if (event.key === "Backspace") {
                    inputs[i].value = '';
                    this.setState({ i: inputs[i].value})
                    console.log("0 :"+inputs[i].value)
                    if (i !== 0)
                        inputs[i - 1].focus();
                } else {
                    if (i === inputs.length - 1 && inputs[i].value !== '') {
                        console.log("11 :"+inputs[i].value)
                        return true;
                    } else if (event.keyCode > 47 && event.keyCode < 58) {
                        inputs[i].value = event.key;
                        this.setState({ i: inputs[i].value})
                        if (i !== inputs.length - 1)
                            inputs[i + 1].focus();
                        event.preventDefault();
                        console.log("1 :"+inputs[i])
                    } else if (event.keyCode > 64 && event.keyCode < 91) {
                        inputs[i].value = String.fromCharCode(event.keyCode);
                        this.setState({ i: inputs[i].value})
                        console.log("2 :"+inputs[i])
                        if (i !== inputs.length - 1)
                            inputs[i + 1].focus();
                        event.preventDefault();
                    }
                }
            });
        }
    }
    onChange(e){
        console.log("hererere i ")
     }
    render() {
        this.OTPInput()
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
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
                                    <div className="logintext">OTP Authentication</div>
                                    <div className="logcon">An authentication code has been sent to <br></br>(+1) 532 123 4086</div>
                                    <div className="tcent">
                                        {/* m: {this.state.time.m} s: {this.state.time.s} */}
                                        {this.state.time.m}:{this.state.time.s} s
                                        </div>

                                    <div className="Loginfo">
                                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                                       
                                            <Form.Group size="lg" >
                                           
                                                <div id="otp" className="d-flex flex-row  mb-6 text-center">
                                                    <Form.Control className="m-2 infe text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
                                                        //  value={this.state.first}
                                                        
                                                        //  onChange={(e) => this.setState({ first: e.target.value })}
                                                        type="text" id="first" maxLength="1" />
                                                    <Form.Control className="m-2 infe text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
                                                        //  value={this.state.second}
                                                        //  onChange={(e) => this.setState({ second: e.target.value })}
                                                        type="text" id="second" maxLength="1" />
                                                    <Form.Control className="m-2 infe text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
                                                        //  value={this.state.third}
                                                        //   onChange={(e) => this.setState({ third: e.target.value })}
                                                        type="text" id="third" maxLength="1" />
                                                    <Form.Control className="m-2 infe text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
                                                        //  value={this.state.fourth}
                                                        //   onChange={(e) => this.setState({ fourth: e.target.value })}
                                                        type="text" id="fourth" maxLength="1" />
                                                    <Form.Control className="m-2 infe text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
                                                        //   value={this.state.fifth}
                                                        //    onChange={(e) => this.setState({ fifth: e.target.value })}
                                                        type="text" id="fifth" maxLength="1" />
                                                    <Form.Control className="m-2 infe text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
                                                        //  value={this.state.sixth}
                                                        //   onChange={(e) => 
                                                            // this.setState({ sixth: e.target.value })
                                                            //  }
                                                        type="text" id="sixth" maxLength="1" />
                                                </div>
                                            </Form.Group>

                                            <div className="row colee">
                                                <div className="col-sm-12 col-md-6"><div className="alignle">Login with<span className="colle"> &nbsp;Password</span></div></div>
                                                <div className="col-sm-12 col-md-6"> <div className="alignrt">Resend Code</div></div>
                                            </div>
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
                                            <Link to='/loginwithpassword'><Button className="conbut" type="submit" 
                                            // disabled={this.isDisabled()}
                                            >
                                                VERIFY ➔  </Button></Link>
                                            
                                            <div className="lowercon">By Signing up, you agree to our <span className="colo"> &nbsp;Terms and Conditions</span></div>
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
export default OTPauth;
