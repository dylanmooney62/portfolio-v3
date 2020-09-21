import tw, { styled } from "twin.macro";

const DefinitionList = styled.dl`
  ${tw`text-sm md:text-base`}

  div {
    ${tw`flex mb-2`}
  }

  dt {
    ${tw`text-gray-800 mr-2 capitalize`}
  }

  dd {
    ${tw`text-gray-700 font-bold`}
  }
`;

export default DefinitionList;
