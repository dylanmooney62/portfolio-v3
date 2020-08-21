import React from "react";
import { Link } from "gatsby";
import tw, { styled, css } from "twin.macro";

import Container from "./common/Container";

import Logo from "../assets/svg/logo.svg";
import Menu from "../assets/svg/menu.svg";

const NAV_ITEMS = [
  { text: "About", href: "/#about" },
  { text: "Projects", href: "/#projects" },
  { text: "Testimonials", href: "/#testimonials" },
  { text: "Contact", href: "/#contact" },
];

const NavItem = ({ text, href }) => (
  <li tw="text-white font-semibold mr-20 xl:mr-24 last:mr-0 hover:text-saffron-orange transition duration-300 ease-in-out">
    <Link tw="p-1 focus:shadow-outline focus:outline-none" to={href}>
      {text}
    </Link>
  </li>
);

const Nav = ({ inverted }) => {
  return (
    <StyledNav tw="py-8 absolute w-full font-body" inverted={inverted}>
      <Container>
        <div tw="flex items-center justify-between">
          <Link tw="focus:shadow-outline focus:outline-none" to="/">
            {!inverted ? (
              <Logo
                tw="w-32 lg:w-40 text-white fill-current"
                aria-hidden="true"
              />
            ) : (
              <Logo
                tw="w-32 lg:w-40 text-gray-900 fill-current"
                aria-hidden="true"
              />
            )}
            <span tw="hidden">Home</span>
          </Link>
          <div>
            <button tw="focus:shadow-outline lg:hidden">
              {!inverted ? (
                <Menu tw="w-6 text-white fill-current" aria-hidden="true" />
              ) : (
                <Menu tw="w-6 text-gray-900 fill-current" aria-hidden="true" />
              )}
              <span tw="hidden">Open Navigation</span>
            </button>
            <ul tw="hidden lg:flex">
              {NAV_ITEMS.map(({ text, href }) => (
                <NavItem text={text} href={href} key={href} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  ${(props) =>
    props.inverted &&
    css`
      li a {
        ${tw`text-gray-600`}
      }
    `}
`;
