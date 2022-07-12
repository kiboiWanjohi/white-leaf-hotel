import React from "react";
import "./Restaurant.css";
const Restaurant = () => {
  return (
    <>
      <div className="main">
        <div className="images">
          <h3>White Leaf Restaurant</h3>
        </div>
        <section className="description">
          <p>
            Owner retired after 40 years. Featured in Nairobi Supper Club book
            and on Discover Juja. Unbelievable opportunity to own a historical
            supper club in the beautiful Northwoods of Juja. Ideal turn-key
            operation! Meticulously maintained building, equipment, and
            property. The dining room seats 88, one of the most beautiful bars
            in the Metropolitan area. Unique lighting and decor throughout.
            Lower level banquet room with private bar. Also a garage and a
            two-bedroom cottage. Excellent repeat customer base year-round and
            reliable, hard-working staff in place. Don't miss this opportunity
            to own one of the most iconic restaurants in the area.
          </p>
        </section>
        <table>
          <th>General Information</th>
          <tr>
            <td>Year Established</td>
            <td>1982</td>
          </tr>
          <tr>
            <td>Employees</td>
            <td>92</td>
          </tr>
          <tr>
            <td>Operating Hours</td>
            <td>All day erry day</td>
          </tr>
          <tr>
            <td>Reason for Sale</td>
            <td>COVID-19</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Restaurant;
