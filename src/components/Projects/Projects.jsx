import React, { useContext } from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Beat from "../../img/hoc.png";
import Travel from "../../img/travel.png";
import Food from "../../img/food.png"
import Fashion from "../../img/fashion.png"
import Talk from "../../img/talk.png"
import Demido from "../../img/demido.png"
import { themeContext } from "../../Context";
const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide><a href="https://github.com/Saurab-Negi/Food-Website"><img src={Food} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://github.com/Saurab-Negi/Voyage-Ventures"><img src={Travel} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://github.com/Saurab-Negi/E-Commerce-Frontend"><img src={Fashion} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://github.com/Saurab-Negi/TalkBot"><img src={Talk} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://github.com/Saurab-Negi/Demido"><img src={Demido} alt="" /></a></SwiperSlide>        
        <SwiperSlide><a href="https://saurab-negi.github.io/OCTANET-MARCH/"><img src={Ecommerce} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://saurab-negi.github.io/BeatBox/"><img src={Beat} alt="" /></a></SwiperSlide>
        <SwiperSlide><a href="https://saurab-negi.github.io/VerveGen-Assignment/"><img src={Sidebar} alt="" /></a></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
