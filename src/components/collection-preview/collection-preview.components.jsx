import React from "react";

import CustomLinkButton from "../custom-link-button/custom-link-button.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, imageUrl, inverted }) => {
  return (
    <div className="collection-preview-container">
      {!inverted ? (
        <LeftContent title={title} imageUrl={imageUrl} />
      ) : (
        <RigthContent title={title} imageUrl={imageUrl} />
      )}
    </div>
  );
};

export default CollectionPreview;

const LeftContent = ({ title, imageUrl }) => (
  <div className="content-container">
    <div className="image-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
    <div className="content">
      <h2 className="cp-title">{title}</h2>
      <p className="cp-description">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
      <div className="cp-link-container">
        <CustomLinkButton title="Saber más" path="" />
      </div>
    </div>
  </div>
);

const RigthContent = ({ title, imageUrl }) => (
  <div className="content-container">
    <div className="content">
      <h2 className="cp-title">{title}</h2>
      <p className="cp-description">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
      <div className="cp-link-container">
        <CustomLinkButton title="Saber más" path="" />
      </div>
    </div>
    <div className="image-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  </div>
);
