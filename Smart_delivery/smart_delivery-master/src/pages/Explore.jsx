import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import ResultsCard from "../components/ResultsCard";
import Intro from "../components/IntroHome";
// import Testimonial from "../components/Carousel";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import Carousel from "../components/Carousel";
// import { Carousel } from "react-responsive-carousel";
// import DemoCarousel from "../components/Carousel";

function Explore() {
  const { session } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <Intro />
      <Carousel />
    </div>
    // (
    //   <div>
    //     <DemoCarousel />
    //   </div>
    // )
  );
}

export default Explore;
