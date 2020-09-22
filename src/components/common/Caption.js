import tw, { styled } from "twin.macro";

const Caption = styled.div`
  ${tw`font-display font-bold text-sm text-gray-800 relative inline-block md:text-base lg:text-lg`}

  &::after {
    content: "";
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    width: 200%;
    height: 0.1rem;
    background: linear-gradient(to right, rgb(44, 82, 130), #ffffff);
    ${tw`rounded-sm`}
  }
`;

export default Caption;
