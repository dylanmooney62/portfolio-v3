import React from "react";
import { styled } from "twin.macro";

import Nav from "./Nav";
import Title from "./common/Title";
import Container from "./common/Container";
import Button from "./common/Button";

import heroImgSm from "../assets/images/hero-sm.jpg";
import heroImgLg from "../assets/images/hero-lg.jpg";

const Hero = () => {
  return (
    <StyledHeader
      tw="relative z-10 xl:h-screen-90 xl:min-h-950"
      style={{ maxHeight: "850px" }}
    >
      <Nav />
      <Container tw="xl:flex flex-col justify-center h-full">
        <div tw="py-32 sm:py-40 md:py-56 xl:p-0 xl:-mt-20">
          <Title tw="mb-3" variant="h1">
            Results Driven <br /> Websites
          </Title>
          <p
            tw="text-xs leading-loose text-white font-body font-normal block max-w-2/3 mb-6 md:text-sm md:mb-8 lg:text-base"
            style={{ opacity: 0.95 }}
          >
            Expert front-end web development services based in Glasgow, Scotland
          </p>
          <div>
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Hero;

// Styles
const StyledHeader = styled.header`
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .1) 20%, rgba(0, 0, 0, 0)), url('${heroImgSm}');
  background-size: cover;
  background-position:  center;


  @media (min-width: 768px) {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .1) 20%, rgba(0, 0, 0, 0)), url('${heroImgLg}')
  }
`;
