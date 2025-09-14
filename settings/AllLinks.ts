import React from "react";
import { SiBuymeacoffee } from "react-icons/si";
import { FaLinkedin, FaProductHunt, FaGithub } from "react-icons/fa6";

export const websiteName = "Shadcn Form Builder";
export const websiteHeroLine = "Build Your Production Ready Forms With Ease";

export const socialLinks = [
  {
    href: "https://github.com/kundalik5545/shadcn_form_builder",
    icon: React.createElement(FaGithub, { className: "w-6 h-6" }),
  },
  {
    href: "https://www.linkedin.com/in/randomcoder1/",
    icon: React.createElement(FaLinkedin, { className: "w-6 h-6" }),
  },
  {
    href: "https://buymeacoffee.com/randomcoders",
    icon: React.createElement(SiBuymeacoffee, { className: "w-6 h-6" }),
  },
  {
    href: "https://www.producthunt.com/@kundalik_jadhav",
    icon: React.createElement(FaProductHunt, { className: "w-6 h-6" }),
  },
];

export const gitHubLink = "https://github.com/kundalik5545/shadcn_form_builder";

export const pagesLinks = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { href: "/templates", label: "Templates" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export const supportLinks = [
  {
    href: "/faq",
    label: "FAQ",
  },
  {
    href: "mailto:randomcoder1@gmail.com?subject=shadcn Form Builder",
    label: "Contact Me",
  },
  {
    href: "https://github.com/kundalik5545/shadcn_form_builder/issues",
    label: "Bug Reports",
  },
];
