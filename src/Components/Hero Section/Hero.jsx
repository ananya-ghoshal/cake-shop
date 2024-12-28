import React from "react";
import "./Hero.css";
import HeroImg from "../../../assets/hero-cutout.png";
import Hero_content from "./Hero_content";
import Categories from "../Categories/Categories";
import Navbar from "../Navigation Bar/Navbar";
import Feedback from "../FeedbackCarousel.jsx/Feedback";

function Hero() {
  const menuItems = {
    menu1: "Home",
    menu2: "Products",
    menu3: "Contact us",
  };
  return (
    <>
      <Navbar menus={menuItems} />
      <div className="hero-page" id="hero-page">
        <img src={HeroImg} alt="HeroImg" className="hero-img" />
        <Hero_content />
      </div>
      <Categories />
      <Feedback />
    </>
  );
}

export default Hero;
