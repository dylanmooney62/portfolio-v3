import React from "react";
import tw, { styled } from "twin.macro";

import Title from "../components/common/Title";

import DashedBorder from "../assets/svg/dashed-border.svg";
import DashedBorderVertical from "../assets/svg/dashed-border-vertical.svg";

import cubes from "../assets/images/cubes.png";

const AboutPanel = () => {
  return (
    <StyledAboutPanel id="about">
      <div tw="w-10/12 mx-auto text-center py-20 relative lg:p-0 lg:flex lg:items-center lg:justify-center lg:py-20 lg:w-4/12 lg:m-0">
        <AboutTitle variant="h2">About</AboutTitle>
        <DashedBorder
          aria-hidden="true"
          tw="absolute w-full bottom-0 mx-auto left-1/2 transform -translate-x-1/2 text-gray-900 lg:hidden"
        />
        <DashedBorderVertical
          aria-hidden="true"
          tw="hidden lg:block text-gray-900 absolute right-0 h-full"
        />
      </div>
      <div tw="w-10/12 pt-12 pb-16 mx-auto lg:w-8/12 lg:py-20 lg:px-8 lg:flex-shrink-0 lg:m-0 lg:ml-5 xl:py-24">
        <p tw="font-body font-medium leading-loose text-sm text-gray-900 italic leading-9 md:text-base">
          Hi, I'm Dylan. I'm a full-time web developer with a passion for
          creating seamless, compelling user experiences. I take great care to
          understand my clients' needs and work closely with them to create a
          solution that works for them and their target audience.
        </p>
      </div>
    </StyledAboutPanel>
  );
};

export default AboutPanel;

// Styles

const StyledAboutPanel = styled.section`
  ${tw`w-full rounded-lg shadow-lg lg:flex`}

  background-image: url(${cubes});
  background-repeat: repeat;
  background-size: 35px;

  background-color: #ffffff;
`;

const AboutTitle = styled(Title)`
  ${tw`relative uppercase`}
  z-index: 10;

  ::before {
    ${tw`text-gray-900`}
    opacity: .075;

    content: "ABOUT";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    font-size: 4rem;
  }
`;
