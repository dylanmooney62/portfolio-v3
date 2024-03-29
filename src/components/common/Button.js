import propTypes from "prop-types";
import tw, { styled } from "twin.macro";

const Button = styled.a`
  ${tw`
  text-xs font-semibold py-3 px-10 font-body rounded-lg text-white relative inline-block z-10 shadow-md\
  md:text-sm md:py-4 md:px-12 cursor-pointer focus:shadow-outline focus:outline-none\
  inline-flex items-center
  `}

  transition: all .3s ease-in-out;

  /* Primary Styles */
  ${(props) =>
    props.variant === "primary" && tw`bg-purple-600 hover:bg-purple-700`}

  /* Secondary Styles */
  ${(props) =>
    props.variant === "secondary" &&
    tw`bg-saffron-orange hover:bg-saffron-orange-dark`}


  /* Small Variant */
  ${(props) => props.small && tw`py-3 px-8 md:py-3 md:px-10`}

  /* Large Variant */



  /* Locked */
  ${(props) =>
    props.variant === "locked" &&
    tw`bg-gray-300 shadow-none text-gray-600 cursor-not-allowed`}

  
    &:disabled { 
        cursor: not-allowed;
        ${tw`bg-gray-600`}   
    }

  
  /* Icons */
  svg {
      ${tw`ml-2`}
    }
`;

Button.propTypes = {
  variant: propTypes.oneOf(["primary", "secondary", "locked"]),
  children: propTypes.node,
};

export default Button;
