import React from "react";
import perfil from "../img/perfil.jpg";
export const TeamSection = () => {
  return (
    <section className="teams">
      <div className="max-width">
        <h2 className="title">My teams</h2>
        <div className="carousel owl-carousel">
          <div className="card">
            <div className="box">
              <img src={perfil} alt="A photo of teamworker" />
              <div className="text">Someone Name</div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={perfil} alt="A photo of teamworker" />
              <div className="text">Someone Name</div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={perfil} alt="A photo of teamworker" />
              <div className="text">Someone Name</div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
