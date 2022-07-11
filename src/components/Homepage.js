import React from "react";
import whiteLeaf from "../images/whiteLeaf.jpg";
import entrance from "../images/entrance.jpg";
import hotelCard from "../images/hotelCard.jpg";
import restaurantCard from "../images/restaurantCard.jpg";

import { Link } from "react-router-dom";
import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <div className="home">
        <div className="image">
          <img src={whiteLeaf} alt="white-leaf" id="home-image" />
          <h3>23 AVENUE STREET, GIKOSH G, 35363 KENYA</h3>
        </div>
        <div className="hotel">
          <div className="about-hotel">
            <h3>WHITE LEAF</h3>
            <p>
              Welcome to the White Leaf
              <strong>
                {" "}
                the most private and smallest of all Nairobi hotels !.
              </strong>
              <br />
              This haven of greenery that used to belong to the Watere family
              and became a Private House allows you to discover
              <strong> the largest hotel garden in the capital,</strong> part of
              the last vestiges of the scrubland of Nairobi. <br /> Over time
              this family house that was once called “geshagz in Nairobi ” has
              established itself as a reference in Nairobi.. <br />
              Whether for a drink, for a dinner or for a night, the White Leaf
              awaits you in Runda in what many people rightly call
              <strong>“a countryside in the heart of Nairobi”</strong>. A
              Private House full of life.
            </p>
          </div>
          <div className="entrance-image">
            <img src={entrance} alt="entrance" />
          </div>
        </div>
        <div className="sales">
          <div className="restaurant-items">
            <img src={restaurantCard} alt="" />
            <div className="container">
              <h4>Restaurant </h4>
              <p>Total Price is Kshs 10 Million</p>
              <Link to="/Restaurant">
                <p>Restaurant</p>
              </Link>
            </div>
          </div>
          <div className="hotel-items">
            <img src={hotelCard} alt="" />
            <div className="container">
              <h4>Hotel </h4>
              <p>Total Price is Kshs 80 Million</p>
              <Link to="/Hotel">
                <p>Hotel</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
