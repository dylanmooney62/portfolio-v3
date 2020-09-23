import propTypes from "prop-types";
import tw, { styled } from "twin.macro";

const Button = styled.a`
  ${tw`
  text-xs font-semibold py-3 px-10 font-body rounded-lg text-white relative inline-block z-10 shadow-md\
  md:text-sm md:py-4 md:px-12 cursor-pointer focus:shadow-outline focus:outline-none\
  inline-flex items-center transition duration-200 ease-in-out
  `}

  /* Primary Styles */
  ${(props) => props.variant === "primary" && tw`bg-blue-800 hover:bg-blue-900`}

  /* Secondary Styles */
  ${(props) =>
    props.variant === "secondary" && tw`bg-green-700 hover:bg-green-800`}


  /* Small Variant */
  ${(props) => props.small && tw`py-3 px-8 md:py-3 md:px-10`}

  
    &:disabled { 
        cursor: not-allowed;
        ${tw`bg-gray-600`}   
    }
`;

Button.propTypes = {
  variant: propTypes.oneOf(["primary", "secondary"]),
  children: propTypes.node,
};

export default Button;
