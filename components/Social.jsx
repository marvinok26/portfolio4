import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />, 
        path: "https://github.com/marvinok26",
        label: "GitHub Profile"
    },
    {
        icon: <FaLinkedinIn />, 
        path: "https://www.linkedin.com/in/marvin-okongo-96b924233/",
        label: "LinkedIn Profile"
    },
    {
        icon: <FaYoutube />, 
        path: "http://www.youtube.com/@arvin_codes",
        label: "YouTube Channel"
    },
    {
        icon: <FaTwitter />, 
        path: "https://x.com/arvin_codes",
        label: "Twitter Profile"
    },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles} aria-label="Social Media Links">
        {socials.map((item, index) => (
            <Link 
                key={index} 
                href={item.path} 
                className={iconStyles}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
            >
                {item.icon}
            </Link>
        ))}
    </div>
  );
};

export default Social