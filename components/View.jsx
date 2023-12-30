import { context } from "./Context";
import { useNavigate, useParams } from "react-router-dom";
import { shoeData } from "./product";
import { Badge, Button, Card } from "react-bootstrap";
import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";


import "./view.css";

function View() {
  const cart = useContext(context);
  const navigate = useNavigate();
  const { carts, setState,badge } = cart;
  const { id } = useParams();
  const data = shoeData.filter((item) => item.id === parseInt(id));
  const add = () => {
    const [newData] = data;
    const ifDataExist = carts.filter((item) => item.id === parseInt(id));

    if(badge==''|| badge == null){
      navigate('/login')
      setTimeout(()=>{
        alert('Login to Continue')

      },10)
    }
   else if (ifDataExist.length > 0) {
      return alert("ITEM ALREADY EXISTS IN CART");
    } else {
      setState([...carts, newData]);
      console.log(carts);
      return alert("ITEM ADDED TO CART");
    }
  };

  const [rating, setRating] = useState(0); // State for star rating
  const [review, setReview] = useState(""); // State for review

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Save review to your data or perform other operations
    console.log("Review:", review);
    setReview("");
  };

  return (
    <div className="view-container">
      {data.map((item) => (
        <Card key={item.id} className="view-card">
          <Card.Img variant="top" src={item.image} className="view-image" />
          <Card.Body>
            <Card.Title className="view-title">{item.title}</Card.Title>
            <Card.Text
              className="view-price"
              style={{
                fontFamily: "sanserif",
                fontWeight: "1000",
                fontSize: "30px",
              }}
            >
              ₹{item.price}
            </Card.Text>
            <div className="star-rating">
              {[...Array(5)].map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={index + 1}
                    onClick={() => handleRating(index)}
                  />
                  <FaStar
                    className="star"
                    color={index < rating ? "#ffc107" : "#e4e5e9"}
                    size={20}
                  />
                </label>
              ))}
            </div>

            <Button variant="primary" onClick={add} className="view-button">
              Add to Cart
            </Button>
            <div className="review-section">
              <form onSubmit={handleSubmitReview}>
                <textarea
                  className="review-input"
                  placeholder="Write a review..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>
                <button type="submit" className="review-button">
                  Submit Review
                </button>
              </form>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default View;
