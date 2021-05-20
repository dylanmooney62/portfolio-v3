import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import ReactCompareImage from "react-compare-image";

import Container from "../common/Container";

const css = {
  borderRadius: "0.5rem",
  boxShadow:
    "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
};

const ImageComparison = ({ left, right }) => (
  <StyledContainer>
    <ReactCompareImage
      leftImage={left.childImageSharp.fluid.src}
      leftImageAlt="Site before design"
      leftImageCss={css}
      rightImage={right.childImageSharp.fluid.src}
      rightImageAlt="Site after design"
      rightImageCss={css}
      aspectRatio="wider"
    />
  </StyledContainer>
);

const StyledContainer = styled(Container)`
  & > div {
    ${tw`shadow-lg`}
  }
`;

ImageComparison.propTypes = {
  left: PropTypes.object,
  right: PropTypes.object,
};

export default ImageComparison;
