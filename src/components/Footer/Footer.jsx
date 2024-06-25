import { Link } from "react-router-dom";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    path: "https://www.facebook.com/yourlawfirm",
    icon: <FaFacebook className="w-6 h-6 text-gray-600 hover:text-primaryColor transition-colors duration-300" />,
  },
  {
    path: "https://twitter.com/yourlawfirm",
    icon: <FaTwitter className="w-6 h-6 text-gray-600 hover:text-primaryColor transition-colors duration-300" />,
  },
  {
    path: "https://www.linkedin.com/company/yourlawfirm",
    icon: <RiLinkedinBoxFill className="w-6 h-6 text-gray-600 hover:text-primaryColor transition-colors duration-300" />,
  },
  {
    path: "https://www.instagram.com/yourlawfirm",
    icon: <FaInstagram className="w-6 h-6 text-gray-600 hover:text-primaryColor transition-colors duration-300" />,
  },
];

const quickLinks = [
  {
    title: "Quick Links",
    links: [
      { path: "/home", display: "Home" },
      { path: "/aboutus", display: "About Us" },
      { path: "/services", display: "Services" },
      { path: "/lawyers", display: "Team" },
      { path: "/login", display: "Book Appointment" },
      { path: "/", display: "Search Location" },
      { path: "/contact", display: "Contact Us" },
    ],
  },
  {
    title: "I want to",
    links: [
      { path: "/", display: "Donate" },
      { path: "/privacy", display: "Privacy Policy" },
      { path: "/terms", display: "Terms of Service" },
    ],
  },
  {
    title: "Support Us",
    links: [
      { path: "/donate", display: "Donate" },
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
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primaryColor transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
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
