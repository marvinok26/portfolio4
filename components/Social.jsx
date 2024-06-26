import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/marvinok26"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/marvin-okongo-96b924233/"},
    {icon: <FaYoutube />, path: "http://www.youtube.com/@arvin_codes"},
    {icon: <FaTwitter />, path: "https://x.com/arvin_codes"},
]


const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>{socials.map((item, index) => {
        return (
            <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        );
    })}
    </div>
  );
};

export default Social