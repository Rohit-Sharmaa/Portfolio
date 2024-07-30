import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";

const data = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/rohit-sharma-b7b762249/",
    icon: <AiFillLinkedin />,
  },
  { id: 2, link: "https://github.com/Rohit-Sharmaa", icon: <AiFillGithub /> },

  // {
  //   id: 3,
  //   link: "https://www.codechef.com/users/iamrohit3000",
  //   icon: <SiCodechef />,
  // },
  // {
  //   id: 4,
  //   link: "https://codeforces.com/profile/rj3377295",
  //   icon: <SiCodeforces />,
  // },
  { id: 5, link: "https://leetcode.com/RohitSharmaa/", icon: <SiLeetcode /> },
];

export default data;
