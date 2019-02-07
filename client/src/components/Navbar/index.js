import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import anime from "animejs";

function Navbar(props) {
   return (
      <div
         id="navbar"
         onMouseEnter={() => expandNavbar()}
         onMouseLeave={() => collapseNavbar()}
      >
         <div id="navbar-heading">
            Handy D<i class="fab fa-d-and-d"></i>D
         </div>
         <div id="navbar-buttons">
            <div className="navbar-button">
               <Link to="/">Home</Link>
            </div>
            <div className="navbar-button">
               <Link to="/campaign">Campaign</Link>
            </div>
            <div className="navbar-button">
               <Link to="/encyclopedia">Encyclopedia</Link>
            </div>
            <div className="navbar-button">
               <Link to="/setup">Setup</Link>
            </div>
            <div className="navbar-button">
               <a href="/" onClick={props.logout}>Sign Out</a>
            </div>
         </div>
      </div>
   );
}

export default Navbar;

function expandNavbar() {
   anime.timeline({
      easing: "easeOutExpo"
   })
   .add({
      targets: "#navbar",
      background: "rgba(227, 12, 26, 1)"
   })
   .add({
      targets: ".navbar-button",
      height: [0, "30px"],
      opacity: [0, 1],
      duration: 300,
      delay: (el, i) => 50 * i
   }, "-=1000")
}

function collapseNavbar() {
   anime.timeline({
      easing: "easeOutExpo"
   })
   .add({
      targets: "#navbar",
      background: "rgba(227, 12, 26, 0)"
   })
   .add({
      targets: ".navbar-button",
      height: ["30px", 0],
      opacity: [1, 0],
      duration: 300,
   }, "-=1000")
}


