import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"

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
      icon: faGithub,
    },
    {
      url: urls.linkedInUrl,
      label: "LinkedIn URL",
      tooltip: "My LinkedIn profile",
      icon: faLinkedin,
    },
    {
      url: urls.mediumUrl,
      label: "Medium URL",
      tooltip: "My Medium Profile",
      icon: faMedium,
    },
  ],
}
