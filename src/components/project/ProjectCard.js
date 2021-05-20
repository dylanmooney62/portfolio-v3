import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import { Link } from "gatsby";
import Img from "gatsby-image";

import Paragraph from "../common/Paragraph";

const ProjectCard = ({ title, slug, thumbnail, logo, services }) => {
  return (
    <StyledProjectCard
      tw="block focus:shadow-outline focus:outline-none rounded-lg"
      to={`/${slug}`}
    >
      <h3 tw="hidden">{title}</h3>
      <div tw="relative h-64 bg-purple-500 mb-8 rounded-lg overflow-hidden shadow-lg">
        <div tw="flex justify-center items-center h-full w-full">
          <Img
            fluid={thumbnail.childImageSharp.fluid}
            tw="h-full w-full absolute inset-0"
            style={{ position: "absolute" }}
          />
          <img tw="relative z-10" src={logo.publicURL} alt={`${title} logo`} />
        </div>
      </div>
      <Paragraph tw="text-center font-medium">{services.join(", ")}</Paragraph>
    </StyledProjectCard>
  );
};

ProjectCard.propTypes = {
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  logo: PropTypes.object.isRequired,
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;

// Styles

const StyledProjectCard = styled(Link)`
  div > div {
    transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
  }

  p {
    transition: all 0.3s ease-in-out;
  }

  :hover {
    div > div {
      transform: scale(1.05);
    }

    p {
      ${tw`text-blue-600`}
    }
  }
`;
