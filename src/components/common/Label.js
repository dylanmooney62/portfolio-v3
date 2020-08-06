import React from "react";
import "twin.macro";

const Label = ({ htmlFor, text, children, ...props }) => (
  <label htmlFor={htmlFor} {...props}>
    <span tw="block text-sm font-medium mb-3 text-gray-800 md:text-base">
      {text}
    </span>
    {children}
  </label>
);

export default Label;
