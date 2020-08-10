import React from "react";

import Slider from "../../components/slider/slider.component";
import FloatingCard from "../../components/floating-card/floating-card.component";
import Section from "../../components/section/section.component";
import MinistriesPreview from "../../components/ministries-preview/ministries-preview.component";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Slider />
      <Section />
      <FloatingCard />
      <MinistriesPreview />
    </div>
  );
};

export default HomePage;
