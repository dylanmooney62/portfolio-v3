import tw, { styled } from "twin.macro";

const Input = styled.input`
  ${tw`w-full text-sm rounded-md py-2 px-3 border border-solid border-gray-400 text-gray-900 focus:shadow-outline focus:outline-none\
    md:text-base
  `}
`;

export default Input;
