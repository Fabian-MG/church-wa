import React from "react";

import Slider from "../../components/slider/slider.component";
import FloatingCard from "../../components/floating-card/floating-card.component";
import Section from "../../components/section/section.component";
import MinistriesPreview from "../../components/ministries-preview/ministries-preview.component";

import "./homepage.styles.scss";
import Footer from "../../components/footer/footer.component";
import CollectionPreview from "../../components/devotional-preview/devotional-preview.components";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Slider />
      <Section />
      <h1 className="section-title">Ministerios</h1>
      <FloatingCard />
      <MinistriesPreview />
      <div className="study-content-container">
        <CollectionPreview
          title="Clases"
          imageUrl="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <CollectionPreview
          title="Devocionales"
          imageUrl="https://images.pexels.com/photos/159679/bible-job-reading-christianity-159679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <CollectionPreview
          title="Eventos"
          imageUrl="https://images.pexels.com/photos/273153/pexels-photo-273153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
