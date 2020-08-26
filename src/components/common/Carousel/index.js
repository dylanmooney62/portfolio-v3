import React, { useRef } from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import Flickity from "react-flickity-component";

import CarouselButton from "./CarouselButton";

const options = {
  draggable: true,
  initialIndex: 0,
  prevNextButtons: false,
};

const Carousel = ({ children }) => {
  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.flkty.next(true);
  };

  const handlePrevious = () => {
    carouselRef.current.flkty.previous(true);
  };

  return (
    <StyledCarousel>
      <Flickity
        options={options}
        reloadOnUpdate
        ref={carouselRef}
        tw="w-full focus:outline-none"
      >
        {children}
      </Flickity>
      <div className="carousel-buttons">
        <CarouselButton variant="previous" onClick={handlePrevious} />
        <CarouselButton variant="next" onClick={handleNext} />
      </div>
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Carousel;

const StyledCarousel = styled.div`
  ${tw`overflow-hidden relative w-full rounded-lg focus:outline-none focus:shadow-outline mb-12`}

  .flickity-page-dots {
    ${tw`flex items-center justify-center h-4`}
  }

  .dot {
    ${tw`w-2 h-2 rounded-full bg-blue-500 hover:cursor-pointer`}

    &:not(:last-child) {
      ${tw`mr-4 lg:mr-6`}
    }

    &::after {
      ${tw`absolute w-3 h-3 rounded-full border-2 border-solid border-blue-500`}
      content: "";
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    &.is-selected {
      ${tw`bg-white relative`}

      &::after {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        transition: all 0.2s ease-in-out;
      }
    }
  }

  .carousel-buttons {
    ${tw`absolute w-full flex justify-between items-center px-4 md:px-8`}
    top: calc(50% - 20px);
    transform: translateY(-50%);
    pointer-events: none;

    button {
      pointer-events: auto;
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    button:first-of-type {
      transform: translateX(-0.5rem);

      /* breakpoint-lg */
      @media (min-width: 1024px) {
        transform: translateX(-1rem);
      }
    }

    button:not(:first-of-type) {
      transform: translateX(0.5rem);

      /* breakpoint-lg */
      @media (min-width: 1024px) {
        transform: translateX(1rem);
      }
    }
  }

  /* button hover styles */

  &:hover {
    button {
      transform: translateX(0px) !important;
      opacity: 1;
      color: green;
    }
  }
`;
