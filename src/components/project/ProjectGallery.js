import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import Img from "gatsby-image";

import Carousel from "../common/Carousel";
import Container from "../common/Container";

const ProjectGallery = ({ images }) => {
  return (
    <Container as="section">
      <Carousel>
        {images.map((img, index) => (
          <Cell key={index}>
            <Img
              fluid={img.childImageSharp.fluid}
              alt=""
              tw="rounded-lg shadow-lg block h-full w-full object-fill object-center"
            />
          </Cell>
        ))}
      </Carousel>
    </Container>
  );
};

ProjectGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProjectGallery;

const Cell = styled.div`
  ${tw`h-64 mr-6 w-full mb-6`}

  /* tailwind breakpoints */

  @media (min-width: 640px) {
    height: 25rem;
  }

  @media (min-width: 1024px) {
    height: 31.25rem;
  }

  @media (min-width: 1280px) {
    height: 37.5rem;
  }
`;
