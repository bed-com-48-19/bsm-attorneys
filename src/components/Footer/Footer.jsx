import { Link } from "react-router-dom";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from '../../assets/images/logo.png'; // Replace with the actual path to your logo

const socialLinks = [
  {
    path: "https://www.facebook.com/bsm-attorneys",
    icon: <FaFacebook className="w-6 h-6 text-blue-800" />,
  },
  {
    path: "https://twitter.com/bsm-attorneys",
    icon: <FaTwitter className="w-6 h-6 text-blue-400" />,
  },
  {
    path: "https://www.linkedin.com/company/bsm-attorneys",
    icon: <RiLinkedinBoxFill className="w-6 h-6 text-blue-600" />,
  },
  {
    path: "https://www.instagram.com/bsm-attorneys",
    icon: <FaInstagram className="w-6 h-6 text-pink-600" />,
  },
];

const quickLinks = [
  {
    title: "Quick Links",
    links: [
      { path: "/", display: "Home" },
      { path: "/about", display: "About Us" },
      { path: "/services", display: "Services" },
      { path: "/profile", display: "Team" },
      { path: "/profile", display: "Book Appointment" },
      { path: "/contact", display: "Search Location" },
      { path: "/contact", display: "Contact Us" },
    ],
  },
  {
    title: "I want to",
    links: [
      { path: "/profile", display: "Book Appointment" },
      { path: "/contact", display: "Search Location" },
      { path: "/services", display: "Terms of Service" },
    ],
  },
  {
    title: "Support Us",
    links: [
      { path: "/contact", display: "Donate" },
      { path: "/volunteer", display: "Volunteer" },
    ],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <div className="col-span-1">
            <h1 className="text-2xl font-bold text-primaryColor mb-4">BSM ATTORNEYS</h1>
            <p className="text-sm text-gray-600 mb-4">
              Copyright @ {year} developed By Fumuwee All rights Reserved.
            </p>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <img src={Logo} alt="Project Logo" className="w-32 h-auto" />
          </div>

          {/* Quick Links Sections */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickLinks.map((section, index) => (
              <div key={index}>
                <h2 className="text-lg font-semibold mb-4 text-primaryColor">{section.title}</h2>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx} className="mb-2">
                      <Link to={link.path} className="text-sm text-gray-600 hover:text-primaryColor transition-colors duration-300">
                        {link.display}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
