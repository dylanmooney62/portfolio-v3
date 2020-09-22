import React from "react";
import PropTypes from "prop-types";
import { styled } from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ href, icon, label, brandColor }) => {
  return (
    <StyledIconButton
      tw="block w-12 h-12 rounded-lg border border-gray-400 flex items-center justify-center focus:shadow-outline focus:outline-none"
      href={href}
      target="_blank"
      rel="noopener"
      brandColor={brandColor}
      aria-label={label}
    >
      <span tw="hidden">{label}</span>
      <FontAwesomeIcon
        tw="fill-current text-gray-700 text-xl"
        className="social-icon"
        icon={icon}
        aria-hidden="true"
        fixedWidth
        rel="noreferrer"
      />
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  brandColor: PropTypes.string.isRequired,
};

export default IconButton;

// Styles

const StyledIconButton = styled.a`
  transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;

  :hover {
    background-color: ${(props) => props.brandColor};
    border-color: ${(props) => props.brandColor};

    .social-icon {
      color: #ffffff;
    }
  }
`;
