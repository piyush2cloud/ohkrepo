import React, { Component, Fragment } from "react";
import HeaderNav from "../../components/header-nav/HeaderNav";
import MovieIntroSlider from "./components/MovieIntroSlider";
import { config } from "../../constants";
import carouselSlidesData from "../../components/Carousel/dummy";
import Carousel from "../../components/Carousel";

const HomeContainer = () => {
  const categoryIds = config.MOVIE_CATEGORIES;
  
  return (
    <Fragment>
      <HeaderNav />
      <Carousel slides={carouselSlidesData} />
      <div className="home-container">

        {categoryIds &&
          categoryIds.map((categoryId, idx) => {
            return <MovieIntroSlider key={idx} categoryId={categoryId} />;
        })}
      </div>
    </Fragment>
  );
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
};

export default HomeContainer;
