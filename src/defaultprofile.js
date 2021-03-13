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
// import { Route, Link } from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import { Route, Link } from 'react-router-dom';
class DefaultPro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHide: false,
            is_footer: true,
            loader: true, data: [], fname: '', lname: '', dob: '', relation: '', message: '', password: '', "errorName": "", success: false
        };
        this.onChange = this.onChange.bind(this)
    }
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
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
                                    <div className="row cus">

                                        <div className="tcentti ">
                                            <img src="http://placehold.it/400x200" class="useri " />
                                            <div className="tcen editu"></div>
                                            <i class="fa fa-edit"></i>


                                        </div>
                                    </div>


                                    <div className="logintext">Select Default Profile</div>
                                    <div className="logcon">Customize Your Experience</div>

                                    <div className="Loginfo">
                                        <div className="row deuser ">
                                            <div className="padd">
                                                <div className="col-2">
                                                    <img src="http://placehold.it/400x200" class="userpro " />
                                                </div>
                                                <div className="col-6 rty" >
                                                    <div className="padd2">
                                                        <div className="usname">Samantha William</div>
                                                        <div className="care">Account Holder</div>
                                                    </div>

                                                </div>
                                                <div className="col-3 pad3">
                                                    <div className="buty achekc "><span className=""></span>
                                            Selected
                                                </div>

                                                </div>
                                                <div className="col-1 padr">

                                                    <div className="ddot">&nbsp;</div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row deuser ">
                                            <div className="padd">
                                                <div className="col-2">
                                                    <img src="http://placehold.it/400x200" class="userpro " />
                                                </div>
                                                <div className="col-6 rty" >
                                                    <div className="padd2">
                                                        <div className="usname">Samantha William</div>
                                                        <div className="care">Account Holder</div>
                                                    </div>

                                                </div>
                                                <div className="col-3 pad3">
                                                    <div className="buty achekc "><span className=""></span>
                                            Selected
                                                </div>

                                                </div>
                                                <div className="col-1 padr">

                                                    <div className="ddot">&nbsp;</div>
                                                </div>
                                            </div>
                                        </div>
                                        <Button className="conbut2" onClick={() => this.handleModalShowHide()}
                                        ><span className="addu">ADD FAMILY MEMBER</span>
                                        </Button>

                                        <Button className="conbut" type="submit"
                                        // disabled={this.isDisabled()}
                                        >
                                            CONTINUE ➔  </Button>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                </div>
                            </div>
                            <div className="row row2">
                            </div>
                        </div>
                        <Modal show={this.state.showHide}  size="lg">
                            <button type="button" class="close" onClick={() => this.handleModalShowHide()}>
                                <span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                            <Modal.Header>
                                <div className="modelhead"  >Add Family Member</div>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row cus modep">
                                    <div className="tcentti ">
                                        <img src="http://placehold.it/400x200" class="useri " />
                                    </div>
                                </div>
                                <div className="logintext2">Samantha William</div>
                                <div className="logcon">Family Member</div>
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
                                                    Relation </div>
                                                    <Form.Group size="lg" controlId="relation">
                                                        <Form.Control className="drpn"
                                                            as="select"
                                                            custom
                                                            onChange={(e) => this.setState({ relation: e.target.value })}
                                                            value={this.state.relation}>
                                                            <option value="Husband">Husband</option>
                                                            <option value="Wife">Wife</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <Link to='/defaultpro'><Button className="conbut modfoot" type="submit"
                                        //  disabled={this.isDisabled()}
                                        >
                                            SAVE CHANGES  </Button></Link>
                                    </Form>
                                </div>
                            </Modal.Body>
                            {/* <Modal.Footer>
                           
                            </Modal.Footer> */}
                        </Modal>
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
export default DefaultPro;
