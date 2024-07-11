import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: "https://github.com/oattao123" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/dollatham-charoethammakit-17041125b" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/luvf_l" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/oatandgiparang" },
];

const Socials = ({containerStyle, iconStyles}) => {
    return (
        <div className={containerStyle}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Socials;
