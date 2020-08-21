import React from "react";

import CustomLinkButton from "../custom-link-button/custom-link-button.component";

import "./previews.styles.scss";

const Previews = ({ title, imageUrl }) => {
  return (
    <div className="collection-preview-container">
      <h2 className="cp-title">{title}</h2>
      <div className="image-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className="content">
        <p className="cp-description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit
        </p>
        <div className="cp-link-container">
          <CustomLinkButton title="Saber más" path="" />
        </div>
      </div>
    </div>
  );
};

export default Previews;
