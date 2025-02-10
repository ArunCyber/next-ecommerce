
import React from "react";


var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}


// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";

// Import Owl Carousel with SSR disabled
const OwlDDDCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

export default function Dashboard() {
    
    
      const options = {
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        },
      };
    
      
    
  return (
    <>
    <h1>Dashboard</h1>
    <OwlDDDCarousel>
        <div className="item"><h4>Slide 1</h4></div>
        <div className="item"><h4>Slide 2</h4></div>
        <div className="item"><h4>Slide 3</h4></div>
        <div className="item"><h4>Slide 4</h4></div>
    </OwlDDDCarousel>
    </>
  )
}