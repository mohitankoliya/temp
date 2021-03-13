import React from "react";
import {
    Card
} from 'react-bootstrap';

export function CardComponent(props) {
    console.log("CardComponent", props)
    
    
      return (
        <>
         
          <div className="row rowpd" >
          {props.item.map((service, index) => {
               return (
                <>
                 <div className="col-sm-12 col-md-6 col-lg-4	 crdpd ">
                        <Card className="siec">
                         <div className="imgcrd">
                            <Card.Img className="imgpos" src={service.service_image} alt={service.service_name} />
                           
                            <Card.ImgOverlay>
                                <div className="setps">
                                     <div className="timeser">
                                          <div className="timenme">{service.service_time}</div>
                                          </div></div>
   
  </Card.ImgOverlay> 
                           
                            <div className="tblo">
                                <div className="stynme">
                                {service.service_name}
                                </div>
                            <div className="stltype">{service.service_type}</div>
                            <div className="stylprice">
                                <span className="styp">{service.service_price}</span>
                                <span className="styop">{service.service_old_price}</span>
                                <div className="btnsty"><div className="bth">
                                ADD +
                                </div>
                                
                                </div>
                                </div>
                            
                            </div>
                            </div>
                        {/* <Card.Body>
                                <Card.Title>{service.service_name}</Card.Title>
                                <Card.Text>{service.service_name}</Card.Text>
                            </Card.Body> */}
                        </Card>
                    </div>
                </>
                );
              })}  
                </div>
            
        </>
         );
     
}
