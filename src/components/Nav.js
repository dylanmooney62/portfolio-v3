import React from "react";
import { Link } from "gatsby";
import "twin.macro";

import Container from "./common/Container";

import Logo from "../assets/svg/logo.svg";
import Menu from "../assets/svg/menu.svg";

const NAV_ITEMS = [
  { text: "About", href: "#about" },
  { text: "Projects", href: "#projects" },
  { text: "Testimonials", href: "#testimonials" },
  { text: "Contact", href: "#contact" },
];

const NavItem = ({ text, href }) => (
  <li tw="text-white font-semibold mr-20 xl:mr-24 last:mr-0 hover:text-saffron-orange transition duration-300 ease-in-out">
    <a tw="p-1 focus:shadow-outline focus:outline-none" href={href}>
      {text}
    </a>
  </li>
);

const Nav = () => {
  return (
    <nav tw="py-8 absolute w-full font-body">
      <Container>
        <div tw="flex items-center justify-between">
          <Link tw="focus:shadow-outline focus:outline-none" to="/">
            <Logo tw="w-32 lg:w-40" aria-hidden="true" />
            <span tw="hidden">Home</span>
          </Link>
          <div>
            <button tw="focus:shadow-outline lg:hidden">
              <Menu tw="w-6" aria-hidden="true" />
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
    </nav>
  );
};

export default Nav;
