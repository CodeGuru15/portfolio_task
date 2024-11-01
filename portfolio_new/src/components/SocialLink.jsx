import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
const SocialLink = () => {
  const links = [
    { name: <FaFacebookSquare />, link: "#" },
    { name: <FaYoutube />, link: "#" },
    { name: <FaGitAlt />, link: "#" },
    { name: <FaLinkedin />, link: "#" },
  ];
  return (
    <div className=" absolute bottom-0 py-10 w-full">
      <ul className=" flex  text-white text-xl gap-5 justify-center">
        {links.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SocialLink;
