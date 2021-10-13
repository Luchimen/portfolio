import React from "react";

export const ServicesSection = () => {
  return (
    <section className="services">
      <div className="max-width">
        <h2 className="title"> MyServices</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fas fa-paint-brush"></i>
              <div className="text">Web Design</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                ratione minima accusamus quod officiis recusandae.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-chart-line"></i>
              <div className="text">Advertising</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                ratione minima accusamus quod officiis recusandae.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">Apps Design</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                ratione minima accusamus quod officiis recusandae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
