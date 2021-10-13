import React from "react";

export const SkillsSection = () => {
  return (
    <section className="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experience.</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              rerum non optio quidem cum nam adipisci, aliquam laborum natus,
              officia in. Quia fugit sit magnam modi? Nesciunt deserunt
              inventore repellendus?
            </p>
            <a href="#">Read more</a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>60%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JAVASCRIPT</span>
                <span>80%</span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>PHP</span>
                <span>30%</span>
              </div>
              <div className="line php"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MYSQL</span>
                <span>15%</span>
              </div>
              <div className="line mysql"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
