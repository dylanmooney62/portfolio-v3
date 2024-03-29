import tw, { styled } from "twin.macro";

const Link = styled.a`
  ${tw`text-blue-800 font-semibold hover:text-blue-900 transition-colors ease-in-out duration-300 focus:shadow-outline focus:outline-none`}
`;

export default Link;
