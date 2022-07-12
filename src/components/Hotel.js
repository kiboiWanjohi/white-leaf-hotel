import React from "react";
import "./Hotel.css";
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
const Hotel = () => {
  return (
    <>
      <div>
        <section className="overview">
          <h3>OVERVIEW</h3>
          <p>
            59 units, 2 building/3 stories, interior corridor, elevators,
            updated 2 BD living quarters, breakfast area, family room & suites,
            meeting room, laundry facilities and outdoor pool. Received “A”
            grade from 2021 Wyndham inspection. Listed at Kshs4,000,000
          </p>
        </section>
        <section className="details">
          <h3>Details</h3>
          <dl>
            <div className="floors">
              <dt>No of Floors</dt>
              <dd>3</dd>
            </div>
            <div className="buildings">
              <dt>No of Buildings</dt>
              <dd>2</dd>
            </div>
            <div className="features">
              <dd>
                <ul>
                  <li>Interior Corridor</li>
                  <li>Breakfast Room</li>
                  <li>Outdoor Scenery</li>
                  <li>Elevator</li>
                  <li>Meeting Space</li>
                </ul>
              </dd>
            </div>
          </dl>
        </section>

        <section className="gallery">
          <div className="img">
            <img src={gallery1} alt="" />
          </div>
          <div className="img">
            <img src={gallery2} alt="" />
          </div>
          <div className="img">
            <img src={gallery3} alt="" />
          </div>
          <div className="img">
            <img src={gallery4} alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hotel;
