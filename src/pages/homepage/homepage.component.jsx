import React from "react";

import Slider from "../../components/slider/slider.component";
import FloatingCard from "../../components/floating-card/floating-card.component";
import Section from "../../components/section/section.component";
import MinistriesPreview from "../../components/ministries-preview/ministries-preview.component";

import './homepage.styles.scss'
import Footer from "../../components/footer/footer.component";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Slider />
      <Section />
      <h1 className='section-title'>Ministerios</h1>
      <FloatingCard />
      <MinistriesPreview />
      <Footer />
    </div>
  );
};

export default HomePage;
