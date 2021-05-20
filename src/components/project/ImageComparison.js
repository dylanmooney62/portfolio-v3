import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import ReactCompareImage from "react-compare-image";

import Container from "../common/Container";

const css = {
  borderRadius: "0.5rem",
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
