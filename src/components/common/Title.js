import React from "react";
import propTypes from "prop-types";
import tw, { styled } from "twin.macro";

const Title = ({ variant, as, children, ...props }) => {
  const Heading = as || variant;

  return (
    <Heading variant={variant} {...props}>
      {children}
    </Heading>
  );
};

Title.propTypes = {
  variant: propTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: propTypes.node,
};

// Styles

const StyledTitle = styled(Title)`
  ${tw`font-display text-gray-900`}

  ${(props) =>
    props.variant === "h1" &&
    tw`\
    font-bold text-4xl text-white tracking-tight leading-tight
    md:text-5xl leading-tight xl:text-6xl
    `}

  ${(props) =>
    props.variant === "h2" &&
    tw`\
    text-3xl font-semibold
    md:text-4xl

  `}

${(props) =>
  props.variant === "h3" &&
  tw`\
    text-2xl font-semibold
    md:text-3xl
  `}
`;

export default StyledTitle;
