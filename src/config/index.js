import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa"

export const urls = {
  linkedInUrl: "https://www.linkedin.com/in/sharmarajdaksh/",
  githubUrl: "https://github.com/sharmarajdaksh",
  mediumUrl: "https://medium.com/@sharmarajdaksh",
}

export default {
  email: "sharmarajdaksh@gmail.com",
  socialIconsData: [
    {
      url: urls.githubUrl,
      label: "Github URL",
      tooltip: "My Github profile",
      icon: FaGithub,
    },
    {
      url: urls.linkedInUrl,
      label: "LinkedIn URL",
      tooltip: "My LinkedIn profile",
      icon: FaLinkedin,
    },
    {
      url: urls.mediumUrl,
      label: "Medium URL",
      tooltip: "My Medium Profile",
      icon: FaMedium,
    },
  ],
}
