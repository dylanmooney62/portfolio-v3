import React from "react";
import PropTypes from "prop-types";
import "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CarouselButton = ({ variant, onClick, ...props }) => {
  return (
    <button
      variant={variant}
      onClick={onClick}
      {...props}
      tw="rounded-lg shadow-md bg-white z-10 h-10 w-10 flex items-center justify-center focus:outline-none focus:shadow-outline lg:h-12 lg:w-12"
      aria-label={variant === "previous" ? "Previous slide" : "Next slide"}
    >
      <FontAwesomeIcon
        icon={variant === "previous" ? faArrowLeft : faArrowRight}
        className="icon"
        tw="text-xs text-gray-800 lg:text-base"
      />
      <span tw="hidden">{variant}</span>
    </button>
  );
};

CarouselButton.propTypes = {
  variant: PropTypes.oneOf(["previous", "next"]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CarouselButton;
