import React from "react";
import { Link } from "react-router-dom";
import WhoWeAreImage from "../../assets/images/client1.jpg"; // Adjust the path to your image
import OurValuesImage from "../../assets/images/h2.jpg"; // Adjust the path to your image
import { FiCheckCircle, FiDollarSign, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-10">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            About Us
          </h1>
          <div className="flex flex-col lg:flex-row mb-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-700 mb-6">
                BSM Attorneys is a Law Firm which was founded as a means to
                provide quality legal services at the most cost-competitive
                manner. The Firm believes that recourse to legal remedies is a
                basic right for all and so it aims to spread wide legal
                solutions for everyone.
              </p>
              <p className="text-gray-700 mb-6">
                There is a common misconception that lawyers or legal services
                are only required when something terribly goes wrong, or are
                reserved for the very few affluent and elite. BSM Attorneys aims
                to change this common narrative.
              </p>
              <p className="text-gray-700 mb-6">
                BSM Attorneys prides itself in being a complete solution to your
                legal needs. Our services range from legal advisory, corporate
                and compliance, drafting and vetting of contracts and other
                legal instruments, and representation before courts.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <img
                src={WhoWeAreImage}
                alt="Who We Are"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mb-8">
            <div className="lg:w-1/2 lg:order-2 lg:pl-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
              <ul className="list-none mb-6 text-gray-700 space-y-4">
                <li className="flex items-center">
                  <FiCheckCircle className="text-primaryColor mr-3" size={24} />
                  Quality Legal Services
                </li>
                <li className="flex items-center">
                  <FiDollarSign className="text-primaryColor mr-3" size={24} />
                  Cost-Competitive Solutions
                </li>
                <li className="flex items-center">
                  <FiUsers className="text-primaryColor mr-3" size={24} />
                  Personalized Interaction
                </li>
                <li className="flex items-center">
                  <FiTrendingUp className="text-primaryColor mr-3" size={24} />
                  Regular Updates on Case Trajectory
                </li>
                <li className="flex items-center">
                  <FiShield className="text-primaryColor mr-3" size={24} />
                  Professional Care
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 lg:order-1">
              <img
                src={OurValuesImage}
                alt="Our Values"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-600">
                Bonwell Mlenga
              </h3>
              <p className="text-gray-700">Managing Partner</p>
              <p className="text-gray-500 mt-2">
                Bonwell Mlenga was admitted to the bar on 14th April, 2016. He
                has vast experience in various areas of the law, having worked
                for Chizumila Msiska & Company, the Ministry of Justice, and now
                BSM Attorneys.
              </p>
              <Link
                to="/profile/bonwell-mlenga"
                className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
              >
                View Full Profile
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-600">
                Clement Maulidi
              </h3>
              <p className="text-gray-700">Partner</p>
              <p className="text-gray-500 mt-2">
                Clement Maulidi was admitted to the bar on 18th May, 2017. He
                has extensive experience in various areas of the law, having
                worked for the Ministry of Justice and now BSM Attorneys.
              </p>
              <Link
                to="/profile/clement-maulidi"
                className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
