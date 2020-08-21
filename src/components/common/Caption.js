import tw, { styled } from "twin.macro";

const Caption = styled.div`
  ${tw`font-display font-medium text-sm text-gray-800 relative inline-block md:text-base lg:text-lg`}

  &::after {
    content: "";
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    width: 200%;
    height: 0.1rem;
    background: linear-gradient(to right, #ff8a00, #ffffff);
    ${tw`rounded-sm`}
  }
`;

export default Caption;
