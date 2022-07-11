import React from "react";
import "./Hotel.css";
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
              <dt># of Floors</dt>
              <dd>3</dd>
            </div>
            <div className="buildings">
              <dt># of Buildings</dt>
              <dd>1</dd>
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

        <section className="gallery"></section>
      </div>
    </>
  );
};

export default Hotel;
