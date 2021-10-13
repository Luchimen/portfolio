import React from "react";
import perfil from "../img/perfil.jpg";
export const AboutSection = () => {
  return (
    <section className="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src={perfil} alt="A photo about me" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Luis Miguel and I'm a <span>Engineer</span>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus animi eos nulla impedit tempore, aliquam perferendis
              possimus ratione accusantium quod ipsa incidunt autem non enim
              esse pariatur dolorum perspiciatis maxime?
            </p>
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};
