import React from "react";
import "twin.macro";

import Container from "./common/Container";

const Footer = () => {
  return (
    <footer tw="bg-gray-900 font-body  ">
      <Container tw="md:py-10 md:flex md:items-center">
        <div tw="hidden w-1/3 md:block"></div>
        <div tw="text-center text-white font-body text-sm opacity-75 leading-loose pt-6 mb-4 md:pt-0 md:mb-0 md:w-1/3">
          <p>Designed & Developed by Me</p>
          <p>
            Built with GatsbyJS{" "}
            <span role="img" aria-label="unicorn">
              ❤️
            </span>
          </p>
        </div>
        <div tw="text-white text-center pb-4 opacity-50 md:pb-0 md:w-1/3 md:text-right">
          <p>
            <small>Dylan Mooney {new Date().getFullYear()} &copy;</small>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
