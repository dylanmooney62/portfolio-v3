import tw, { styled } from "twin.macro";

const Caption = styled.div`
  ${tw`font-display font-bold text-sm text-gray-100 relative inline-block md:text-base lg:text-lg italic`}

  &::after {
    content: "";
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    width: 200%;
    height: 0.1rem;
    background: linear-gradient(
      to right,
      rgb(255, 138, 0),
      rgba(255, 138, 0, 0.5)
    );
    ${tw`rounded-sm`}
  }
`;

export default Caption;
