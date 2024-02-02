import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import React, { useState } from "react";
// import Carousel from "./components/Carousel";

function IntroHome() {
  return (
    <div className="container-intro">
      <div className="intro-text">
        <h3>Rent a car în România</h3>
        <h1>Bine ai venit pe DriveSmart.ro</h1>
        <h3>Sună la 0357913</h3>
        <p>
          Aici, experiența ta de închiriere auto în România devine simplă și
          plăcută.
        </p>
      </div>

      <img src="../img/Background.jpg" alt="" />
      {/* <Carousel>
        <div>Slide 1 Content</div>
        <div>Slide 2 Content</div>
        <div>Slide 3 Content</div>
      </Carousel> */}
    </div>
  );
}

export default IntroHome;
