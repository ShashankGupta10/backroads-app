import React from "react";
import Tour1 from "../images/tour-1.jpeg"
import Tour2 from "../images/tour-2.jpeg"
import Tour3 from "../images/tour-3.jpeg"
import Tour4 from "../images/tour-4.jpeg"

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={Tour1} className="tour-img" alt="" />
            <p className="tour-date">August 26th, 2023</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>Igatpuri Adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                Igatpuri
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={Tour2} className="tour-img" alt="" />
            <p className="tour-date">october 11th, 2023</p>
          </div>
          <div className="tour-info">
            <h4>Gaav</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                Pune
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={Tour3} className="tour-img" alt="" />
            <p className="tour-date">september 15th, 2023</p>
          </div>
          <div className="tour-info">
            <h4>Dubai</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                Dubai
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={Tour4} className="tour-img" alt="" />
            <p className="tour-date">december 5th, 2023</p>
          </div>
          <div className="tour-info">
            <h4>Egypt Wildlife</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                Egypt
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Tours;
