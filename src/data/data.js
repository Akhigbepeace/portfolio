import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const wetland = "/assets/projects/wetland.png";
const wavecrest = "/assets/projects/wavecrest.png";
const HTML = "/assets/html.png";
const CSS = "/assets/css.png";
const JavaScript = "/assets/javascript.png";
const ReactImg = "/assets/react.png";
const GitHub = "/assets/github.png";
const Tailwind = "/assets/tailwind.png";
const nextImg = "/assets/nextImg.png";

export const navbarLinks = [
  {
    title: "Home",
    to: "home",
  },
  {
    title: "About",
    to: "about",
  },
  {
    title: "Skills",
    to: "skills",
  },
  {
    title: "Work",
    to: "work",
  },
  {
    title: "Contact",
    to: "contact",
  },
];

export const socialMedia = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    href: "https://www.linkedin.com/in/akhigbe-peace-bb7a04220/",
    bg: "#5752e5",
  },
  {
    name: "Github",
    icon: <FaGithub size={30} />,
    href: "https://github.com/Akhigbepeace",
    bg: "#333333",
  },
  {
    name: "Twitter",
    icon: <BsTwitter size={30} />,
    href: "https://twitter.com/akhigbe_peace1",
    bg: "#709dff",
  },
  {
    name: "Resume",
    icon: <BsFillPersonLinesFill size={30} />,
    href: "https://drive.google.com/file/d/1wSLlE0mPGn9opu_njcMDdD0006QACVT-/view?usp=share_link",
    bg: "#565f69",
  },
];

export const technologies = [
  {
    title: "HTML",
    img: HTML,
  },
  {
    title: "CSS",
    img: CSS,
  },
  {
    title: "Javascript",
    img: JavaScript,
  },
  {
    title: "React",
    img: ReactImg,
  },
  {
    title: "GITHUB",
    img: GitHub,
  },
  {
    title: "Tailwind",
    img: Tailwind,
  },
  {
    title: "NextJs",
    img: nextImg,
  },
];

export const data = [
  {
    id: 1,
    name: "React JS Application",
    image: wetland,
    github: "https://github.com/Akhigbepeace/Wetland-Foundation",
    live: "https://wetland-foundation.vercel.app/",
  },
  {
    id: 2,
    name: "NextJS Application",
    image: wavecrest,
    github: "https://github.com/Akhigbepeace/Wavecrest",
    live: "https://www.wavecrest.edu.ng/home",
  },
];
