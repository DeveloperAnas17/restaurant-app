import React from "react";

import { images } from "../constants";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className=" leading-7 text-white font-medium capitalize text-lg tracking-wider">
      {title}
    </p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img w-12" />
  </div>
);

export default SubHeading;
