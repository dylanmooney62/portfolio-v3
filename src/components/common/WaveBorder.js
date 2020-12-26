import React from "react";
import tw, { styled, css } from "twin.macro";

import Wave from "../../assets/svg/wave.svg";

const WaveBorder = ({ variant }) => {
  return <StyledWave variant={variant} />;
};

export default WaveBorder;

WaveBorder.defaultProps = {
  variant: "primary",
};

const StyledWave = styled(Wave)`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;

  path {
    ${(props) =>
      props.variant === "primary" &&
      css`
        fill: white;
      `};

    ${(props) =>
      props.variant === "secondary" && tw`fill-current text-gray-100`}
  }
`;
