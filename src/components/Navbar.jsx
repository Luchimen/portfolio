import React, { useState } from "react";

export const Navbar = () => {
  // window.scroll(() => {
  //   if (window.scrollY > 30) {
  //     console.log("Supero los 30");
  //   }
  // });
  const [navBarCentinel, setNavBarCentinel] = useState(0);
  const [listItemsCentinel, setListItemsCentinel] = useState(false);

  const rodando = (e) => {
    setNavBarCentinel(window.scrollY);
  };
  window.addEventListener("scroll", rodando);

  return (
    <nav className={navBarCentinel > 200 ? "navbar sticky" : "navbar"}>
      <div className="max-width">
        <div className="logo">
          <a href="#">
            Portf<span>lio.</span>
          </a>
        </div>
        <ul className={listItemsCentinel === false ? "menu" : "menu active"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="menu-btn">
          <i
            className={
              listItemsCentinel === false ? "fas fa-bars" : "fas fa-times"
            }
            onClick={() => {
              setListItemsCentinel(!listItemsCentinel);
              console.log(listItemsCentinel);
            }}
          ></i>
        </div>
      </div>
    </nav>
  );
};
