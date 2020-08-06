import propTypes from "prop-types";
import tw, { styled, css } from "twin.macro";

const Button = styled.a`
  ${tw`
  text-xs font-semibold py-3 px-10 font-body rounded-full text-white relative inline-block z-10 shadow-md\
  md:text-sm md:py-4 md:px-12 cursor-pointer focus:shadow-outline focus:outline-none
  `}

  ::before {
    content: "";
    ${tw`absolute top-0 left-0 w-full h-full rounded-full opacity-0`}
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  :hover ::before {
    opacity: 1;
  }

  /* Primary Styles */
  ${(props) =>
    props.variant === "primary" &&
    css`
      background: linear-gradient(105deg, #ff8d00 0%, #ff0610 100%);

      ::before {
        background: linear-gradient(105deg, #ff0610 0%, #ff8d00 100%);
      }
    `}

  /* Secondary Styles */
  ${(props) =>
    props.variant === "secondary" &&
    css`
      background: linear-gradient(105deg, #009aed 0%, #00cceb 100%);

      ::before {
        background: linear-gradient(105deg, #00cceb 0%, #009aed 100%);
      }
    `}
`;

Button.propTypes = {
  variant: propTypes.oneOf(["primary", "secondary"]),
  children: propTypes.node,
};

export default Button;
