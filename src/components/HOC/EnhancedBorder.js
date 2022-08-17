import React, { useState } from "react";

import "./EnhancedBorder.css";

const EnhancedBorder = (OriginalComponent) => {
  const NewComponent = () => {
    return (
      <div className="border">
        <OriginalComponent />
      </div>
    );
  };
  return NewComponent;
};

export default EnhancedBorder;
