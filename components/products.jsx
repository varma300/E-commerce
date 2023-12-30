import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Catogeries } from "./catogeries";

function Products() {
  
  return (
    <div>
      <Card className="text-center">
        <Card.Img
          variant="top"
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg"
        />
        <Card.ImgOverlay className="d-flex align-items-center justify-content-start">
          <div style={{ textAlign: "left" }}>
            <Card.Body>
              <Card.Title style={{ color: "white" }} >
                <h1 className="heading-love">Love the Planet</h1>
                <h1 className="heading-love1">we walk on</h1>
              </Card.Title>
              <Card.Text className="heading-love1" style={{ color: "white" }}>
                <p className="heading-love1">Bibendum fermentum, aenean donec pretium aliquam blandit</p>
                tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
              </Card.Text>
              <Link to="/men">
                <Button
                  variant="light"
                  text="dark"
                  size="lg"
                  className="btn-hover rounded-0 mb-5 shop-button"
                  style={{  fontSize: "14px", fontWeight: "600" }}
                  
                >
                  SHOP MEN
                </Button>
              </Link>
              <Link to="/women">
                <Button
                  variant="light"
                  size="lg"
                  className="btn-hover rounded-0 ms-4 mb-5 shop-button"
                  style={{ color: "dark", fontSize: "14px", fontWeight: "600" }}
                >
                  SHOP WOMEN
                </Button>
              </Link>
     
            </Card.Body>

          </div>
        </Card.ImgOverlay>

      
      </Card>

      {/* <div style={{ width: '100%' }}>
  <div className="ms-5 mt-5 card-img-product" style={{ width: '70%', display: 'flex' }}>
    <Card.Img
    style={{width:'50%'}}
      className='matti-bro'
      variant="top"
      src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg"
    />
    <div className="d-flex flex-column justify-content-center ms-4">
      <p style={{ textAlign: 'left', color:'#f6aa28' ,  fontFamily: "Poppins,sans-serif", fontSize:'14px' }}>
        A B O U T {'  '} <span> {'  '} U S</span> 
      </p>
      <p style={{ textAlign: 'left'  , fontFamily: "Poppins,sans-serif" , fontSize:'40px'}}>
        Selected materials 
      </p>
      <p style={{ textAlign: 'left' , fontFamily: "Poppins,sans-serif" , fontSize:'40px'}}>
      designed for comfort 
      </p>
      <p style={{ textAlign: 'left' , fontFamily: "Poppins,sans-serif" , fontSize:'40px'}}>
      and sustainability
      </p>
      <p style={{ textAlign: 'left' ,color:'#979a9b', fontSize:'18px' , fontFamily: "Inter,sans-serif" ,}}>
      Nullam auctor faucibus ridiculus dignissim sed et 
      </p>
      <p style={{ textAlign: 'left'  ,color:'#979a9b' , fontSize:'18px' , fontFamily: "Inter,sans-serif" ,}}> auctor sed eget auctor nec sed elit nunc, magna non </p>
      <p style={{textAlign:'left' ,color:'#979a9b' , fontSize:'18px' , fontFamily: "Inter,sans-serif" ,}}>
      urna amet ac neque ut quam enim pretium risus 
      </p>
      <p style={{textAlign:'left' ,color:'#979a9b' , fontSize:'18px' , fontFamily: "Inter,sans-serif" ,}}>
      gravida ullamcorper adipiscing at ut magna.
      </p>
      <p style={{ textAlign: 'left' ,color:'#262b2c', fontSize:'14px', fontWeight:'500' }}>
      R E A D {'  '}  M O R E
      <hr className="my-0 " style={{width:'23%', color:'#f6aa28', height:'4px'}}/>
      </p>
    </div>
  </div>
</div> */}

      <div className="mt-5 heading-arrival" style={{backgroundColor:'white', width:'100%', height:'5rem'}}><p className="" style={{
            fontSize: "4rem",
            fontFamily: "Poppins,sans-serif",
            fontWeight: 550,
            color: "#6e7051",
            margin: "0 auto",
            textAlign:'center'
            
          }}>NEW ARRIVALS</p></div>
      <div style={{backgroundColor:'white' , width:'100%'}}>
      <div className="row gap-5 pt-5 d-flex mx-auto" style={{width:'65%'}}>
        {Catogeries.map((item) => (
          <Card
            className="shadow p-3 mb-5 bg-body-tertiary rounded border border-0 rounded-0"
            style={{ width: "18rem" }}
          >
            <Card.Img  className="image" variant="top" src={item.image} />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title style={{ fontFamily: "poppins, sans-serif", fontSize: '15px' }}>
                {item.title}
              </Card.Title>
              <Card.Text
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "1000",
                  fontSize: "30px",
                }}
              >
                ₹{item.price}
              </Card.Text>
              
            </Card.Body>
          </Card>
        ))}
      </div>
      </div>
    </div>      
  );
}

export default Products;
