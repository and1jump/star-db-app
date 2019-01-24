import React from "react";

import "./error-indicator.css";
import deathStar from "./death-star.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={deathStar} alt="Death Star" />
      <span className="boom">BOOM!</span>
      <span>Something has gone terribly wrong</span>
      <span>(but we alredy send droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
