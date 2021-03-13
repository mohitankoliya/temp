/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect,Component } from 'react';
import 'idempotent-babel-polyfill';
import Footer from './Footer';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Suspense } from 'react';
import Loader from './Loader'
import Header from './Header';
import Form from "react-bootstrap/Form";
import { Route, Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import ReactDOM from "react-dom";
import { SliderImageComponent } from './Component/SliderImageComponent'
import { ActiveStylist } from './Component/ActiveStylist'
import { CardComponent } from './Component/CardComponent'
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { Draggable } from "gsap/Draggable";
    // import { motion, useAnimation } from "framer-motion";
    
var testdata = [
  {
    "category_id":"1",
    "category_name": "Hair",
    "category_image": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
  },
  {
    "category_id":"2",
    "category_name": "Face",
    "category_image": "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
  },
  {
    "category_id":"3",
    "category_name": "Body",
    "category_image": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
  },
  {
    "category_id":"4",
    "category_name": "Nail",
    "category_image": "https://homepages.cae.wisc.edu/~ece533/images/cat.png"
  },
  {
    "category_id":"5",
    "category_name": "Hair",
    "category_image": "https://homepages.cae.wisc.edu/~ece533/images/pool.png"
  },
  {
    "category_id":"6",
    "category_name": "Face",
    "category_image": "https://homepages.cae.wisc.edu/~ece533/images/serrano.png"
  },
  {
    "category_id":"7",
    "category_name": "Body",
    "category_image": "https://homepages.cae.wisc.edu/~ece533/images/watch.png"
  },
  {
    "category_id":"8",
    "category_name": "Nail",
    "category_image": "https://homepages.cae.wisc.edu/~ece533/images/zelda.png"
  }
]
var activetestdata = [
  {
    "stylist_id":"1",
    "stylist_name": "Paul Soto",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
  },
  {
    "stylist_id":"2",
    "stylist_name": "Trevor Huff",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
  },
  {
    "stylist_id":"3",
    "stylist_name": "Lily Griffith",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
  },
  {
    "stylist_id":"4",
    "stylist_name": "Adrian Carr",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/cat.png"
  },
  {
    "stylist_id":"5",
    "stylist_name": "Troy Davis",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/pool.png"
  },
  {
    "stylist_id":"6",
    "stylist_name": "Paul Soto",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/serrano.png"
  },
  {
    "stylist_id":"7",
    "stylist_name": "Trevor Huff",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/watch.png"
  },
  {
    "stylist_id":"8",
    "stylist_name": "Lily Griffith",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/zelda.png"
  },
  {
    "stylist_id":"9",
    "stylist_name": "Adrian Carr",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/cat.png"
  },
  {
    "stylist_id":"10",
    "stylist_name": "Troy Davis",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/pool.png"
  },
  {
    "stylist_id":"11",
    "stylist_name": "Paul Soto",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/serrano.png"
  },
  {
    "stylist_id":"12",
    "stylist_name": "Trevor Huff",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/watch.png"
  },
  {
    "stylist_id":"13",
    "stylist_name": "Troy Davis",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/pool.png"
  },
  {
    "stylist_id":"14",
    "stylist_name": "Paul Soto",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/serrano.png"
  },
  {
    "stylist_id":"15",
    "stylist_name": "Trevor Huff",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/watch.png"
  },
  {
    "stylist_id":"16",
    "stylist_name": "Lily Griffith",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/zelda.png"
  },
  {
    "stylist_id":"17",
    "stylist_name": "Adrian Carr",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/cat.png"
  },
  {
    "stylist_id":"18",
    "stylist_name": "Troy Davis",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/pool.png"
  },
  {
    "stylist_id":"19",
    "stylist_name": "Paul Soto",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/serrano.png"
  },
  {
    "stylist_id":"20",
    "stylist_name": "Trevor Huff",
    "stylist_image": "https://homepages.cae.wisc.edu/~ece533/images/watch.png"
  }
]
var cardtestdata=[
  {
    "service_id":"1",
    "service_name": "Men’s Hair Cut",
    "service_image": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "service_rate": "4.9",
    "service_type": "Junior Stylist",
    "service_price": "$60.00",
    "service_old_price": "$90.00",
    "service_time": "50"
  },
  {
    "service_id":"2",
    "service_name": "Men’s Hair Cut",
    "service_image": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "service_rate": "4.9",
    "service_type": "Junior Stylist",
    "service_price": "$60.00",
    "service_old_price": "$90.00",
    "service_time": "50"
  },
  {
    "service_id":"3",
    "service_name": "Men’s Hair Cut",
    "service_image": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "service_rate": "4.9",
    "service_type": "Junior Stylist",
    "service_price": "$60.00",
    "service_old_price": "$90.00",
    "service_time": "50"
  },
  {
    "service_id":"4",
    "service_name": "Men’s Hair Cut",
    "service_image": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "service_rate": "4.9",
    "service_type": "Junior Stylist",
    "service_price": "$60.00",
    "service_old_price": "$90.00",
    "service_time": "50"
  },
  {
    "service_id":"5",
    "service_name": "Men’s Hair Cut",
    "service_image": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "service_rate": "4.9",
    "service_type": "Junior Stylist",
    "service_price": "$60.00",
    "service_old_price": "$90.00",
    "service_time": "50"
  },
  {
    "service_id":"6",
    "service_name": "Men’s Hair Cut",
    "service_image": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "service_rate": "4.9",
    "service_type": "Junior Stylist",
    "service_price": "$60.00",
    "service_old_price": "$90.00",
    "service_time": "50"
  },
  {
    "service_id":"7",
    "service_name": "Men’s Hair Cut",
    "service_image": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "service_rate": "4.9",
    "service_type": "Junior Stylist",
    "service_price": "$60.00",
    "service_old_price": "$90.00",
    "service_time": "50"
  },
  {
    "service_id":"8",
    "service_name": "Men’s Hair Cut",
    "service_image": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "service_rate": "4.9",
    "service_type": "Junior Stylist",
    "service_price": "$60.00",
    "service_old_price": "$90.00",
    "service_time": "50"
  },
  {
    "service_id":"9",
    "service_name": "Men’s Hair Cut",
    "service_image": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "service_rate": "4.9",
    "service_type": "Junior Stylist",
    "service_price": "$60.00",
    "service_old_price": "$90.00",
    "service_time": "50"
  }
  
]
    gsap.registerPlugin(ScrollTrigger, Draggable);
    
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_footer: true,
      loader: true, data: [], message: '', phone: '', "errorName": "", success: false
    };
   
  }
 
  async componentDidMount() {
    this.setState({ "loader": false });
  }
  
  render() {
    // let renderArr = this.state.renderArr;
    return (
      // <Suspense  fallback={<Loader></Loader>}>
      <div>
        <Header />
        {/* {(renderArr !== undefined && renderArr.length > 0 && renderArr !== null) &&
                        renderArr.map((block, i) => (
                            <div key={i}>
                                {block.value}
                            </div>
                        ))
                    } */
                    <div className="container">
                       {/* <div className="row"> */}
              <div className="App2">
                <div className="ctt">
                <span className="alignleft">Categories</span><span className="alignright2">Junior</span>   
                  </div>
    <SliderImageComponent item={testdata}></SliderImageComponent>
    <div className="ctt2">
      <span className="alignleft">Services</span><span className="alignright">Show All</span>
      </div>

    <CardComponent item={cardtestdata}></CardComponent>
   
    <div className="ctt">
      <span className="alignleft">Active Stylist </span><span className="ction">25+</span><span className="alignright3">Show All</span>
      </div>
      <ActiveStylist item={activetestdata}></ActiveStylist>
  
  <div className="fty"></div>
    
    </div>
    {/* </div> */}
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
export default Home;
