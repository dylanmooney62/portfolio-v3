import React from "react";
import "twin.macro";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import IconButton from "./common/IconButton";

const LINKS = [
  {
    href: "https://www.linkedin.com",
    icon: faLinkedin,
    label: "LinkedIn",
    brandColor: "#0077B5",
  },
  {
    href: "https://www.github.com",
    icon: faGithub,
    label: "Github",
    brandColor: "#333333",
  },
  {
    href: "https://www.codepen.com",
    icon: faCodepen,
    label: "Codepen",
    brandColor: "#333333",
  },
];

const SocialButtonList = () => {
  return (
    <ul tw="flex lg:justify-end">
      {LINKS.map(({ href, icon, label, brandColor }) => (
        <li tw="mr-4 last:mr-0" key={label}>
          <IconButton
            href={href}
            icon={icon}
            label={label}
            brandColor={brandColor}
          />
        </li>
      ))}
    </ul>
  );
};

export default SocialButtonList;
