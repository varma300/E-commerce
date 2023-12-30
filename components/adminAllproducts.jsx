import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {  useNavigate } from "react-router-dom";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import { useEffect } from "react";
import { context } from "./Context";
import { useContext } from "react";

function AdminAllProduct() {
  const navigate = useNavigate();
  const data = useContext(context);
  const { product, setproduct, edit, setedit } = data;
//   const location = useLocation();
//   const [cahnge, setchange] = useState(false);

//   useEffect(() => {
//     if (location.pathname.includes("admin")) {
//       setchange(true);
//     } else {
//       setchange(false);
//     }
//   }, [location]);

  const remove = (element) => {
    const idData = parseInt(element.target.id);
    const filterData = product.filter((item) => item.id !== idData);
    setproduct(filterData);
  };
  const editProduct = (element) => {
    const idData = parseInt(element.target.id);
    const EDITData = product.filter((item) => item.id === idData);
    setedit(EDITData);
    console.log(edit);
    navigate("/admin/edit");
  };

  return (
    <div style={{ backgroundColor: "#f1f1ef", display: "flex", justifyContent: "center" , width:'100%'}}>
      <div className="d-flex flex-column container pt-5 ps-5 woocommerce-products-header__title page-title" style={{ backgroundColor: "white", maxWidth: "100%" }}>
        <h2
          className="px-5 woocommerce-products-header__title page-title"
          style={{
            backgroundColor: "white",
            fontSize: "4rem",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 550,
            color: "#6e7051",
            margin: "0 auto",
          }}
        >
          PRODUCTS
        </h2>
        <div className="row gap-1 pt-5 d-flex mx-auto justify-content-center">
          {product.map((item) => (
            <div className="col-lg-3 col-md-6">
              <Card
                className="shadow p-3 mb-5 bg-body-tertiary rounded border border-0 rounded-4"
                style={{ width: "18rem" }}
              >
                <Card.Img className="image" variant="top" src={item.image} />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title style={{ fontFamily: "poppins, sans-serif", fontSize: '15px' }}>{item.title}</Card.Title>
                  <Card.Text style={{ fontFamily: "sans-serif", fontWeight: "1000", fontSize: "30px" }}>
                    ₹{item.price}
                  </Card.Text>
                  <Button id={item.id} onClick={editProduct} className="border border-0 rounded-0">
                    EDIT
                  </Button>
                  <Button id={item.id} variant="danger" onClick={remove} className="ms-5 border border-0 rounded-0">
                    DELETE
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default AdminAllProduct;
