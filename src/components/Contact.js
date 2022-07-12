import React from "react";
import contactUs from "../images/contactUs.jpg";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contactImage">
        <img src={contactUs} alt="" />
      </div>
      <div className="restaurantandhotel">
        <h3>Restaurant, Bar and Hotel</h3>
        <h4>Reception @white-leaf.com</h4>
        <h4>Hotels Consaultant</h4>
        <p> + (888) 1910-1919</p>
      </div>
    </div>
  );
};

export default Contact;
