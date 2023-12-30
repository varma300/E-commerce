import React from "react";
import { shoeData } from "./product";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./header.css";
import './buttonView.css'

function Women() {
  const data = shoeData.filter((item) => item.model === "women");
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#f1f1ef", width: "100%" ,}}>
      <div
        style={{ width: "100%", backgroundColor: "#f1f1ef", height: "10vh" }}
      ></div>
      <div
        className="d-flex flex-column container pt-5 ps-5 woocommerce-products-header__title page-title"
        style={{ backgroundColor: "white", maxWidth: "90%" }}
      >
        <h2
          className=" woman-txt  px-5 woocommerce-products-header__title page-title "
          style={{
            backgroundColor: "white",
            fontSize: "4rem",
            fontFamily: "Poppins,sans-serif",
            fontWeight: 550,
            color: "#6e7051",
            margin: "0 auto",
          }}
        >
          WOMEN
        </h2>
        <div className="row gap-5 pt-5 d-flex  mx-auto">
          {data.map((item) => (
            <Card
              className="shadow p-3 mb-5 bg-body-tertiary rounded border border-0 rounded-0 kuttapu"
              style={{
                width: "18rem",
                boxShadow: " 7px 5px 8px rgba(0, 0, 0, 0.8)",
              }}
            >
              <Card.Img onClick={() => navigate(`/view/${item.id}`)} variant="top" className="image" src={item.image} />
              <Card.Body style={{textAlign:'center'}}>
                <Card.Title style={{ fontFamily: "poppins,sanserif" }}>
                  {item.title}
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: "sanserif",
                    fontWeight: "1000",
                    fontSize: "30px",
                  }}
                >
                  ₹{item.price}
                </Card.Text>
                <button className="button-mon">
  <div class="default-btn">
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
    <span>View</span>
  </div>
  <div class="hover-btn" onClick={() => navigate(`/view/${item.id}`)}>
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    <span>Shop Now</span>
  </div>
</button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Women;
