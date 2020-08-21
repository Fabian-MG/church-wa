import React from "react";

import Slider from "../../components/slider/slider.component";
import FloatingCard from "../../components/floating-card/floating-card.component";
import Section from "../../components/section/section.component";
import MinistriesPreview from "../../components/ministries-preview/ministries-preview.component";

import "./homepage.styles.scss";
import Footer from "../../components/footer/footer.component";
import Previews from '../../components/previews/previews.component'
// import CollectionPreview from "../../components/collection-preview/collection-preview.components";

const previews = [
  {
    title: "Clases",
    inverted: false,
    imageUrl:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Devocionales",
    inverted: true,
    imageUrl:
      "https://images.pexels.com/photos/4654082/pexels-photo-4654082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Recursos",
    inverted: false,
    imageUrl:
      "https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const HomePage = () => {
  return (
    <div className="HomePage">
      <Slider />
      <Section />

      <div className="previews-container">
        {previews.map(({ title, imageUrl }, idx) => (
          <Previews key={idx} title={title} imageUrl={imageUrl} />
        ))}
      </div>

      <h1 className="section-title">Ministerios</h1>
      <FloatingCard />
      <MinistriesPreview />

      <Footer />
    </div>
  );
};

export default HomePage;

/*


*/
