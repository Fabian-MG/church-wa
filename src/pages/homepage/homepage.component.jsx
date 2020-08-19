import React from "react";

import Slider from "../../components/slider/slider.component";
import FloatingCard from "../../components/floating-card/floating-card.component";
import Section from "../../components/section/section.component";
import MinistriesPreview from "../../components/ministries-preview/ministries-preview.component";

import "./homepage.styles.scss";
import Footer from "../../components/footer/footer.component";
import CollectionPreview from "../../components/collection-preview/collection-preview.components";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Slider />
      <Section />
      <h1 className="section-title">Ministerios</h1>
      <FloatingCard />
      <MinistriesPreview />
      <CollectionPreview
        title="Clases"
        imageUrl="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />

      <Footer />
    </div>
  );
};

export default HomePage;
