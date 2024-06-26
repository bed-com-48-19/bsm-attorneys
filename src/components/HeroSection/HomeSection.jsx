import { useState } from "react";
import services from "../../assets/data/service";
import heroImg01 from "../../assets/images/hammer.jpg";
import Img03 from "../../assets/images/law2.jpg";
import avatar from "../../assets/images/avatar.png";
import ServiceModal from "../Service/ServiceModal";
import { Link } from "react-router-dom";
import { FiUser, FiBriefcase, FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setModalOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/*=============================== hero section ================*/}
      <section className="hero__section pt-24 2xl:h-96">
        {" "}
        {/* Increased top padding */}
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-headingColor">
                LEGAL PRACTITIONERS, COMMISSIONERS FOR OATHS.
              </h1>
              <p className="text-lg text-textColor mt-4">
                Explore the Expertise: Unveiling a Legal Journey. Delve into the
                comprehensive portfolio of our accomplished attorneys,
                showcasing a legacy of success in various legal realms. From
                intricate cases to landmark victories, discover the depth of our
                commitment to justice and excellence. Your trusted ally in legal
                matters, dedicated to navigating complexities and securing your
                rights.
              </p>

              <button className="btn mt-6" onClick={scrollToContact}>
                Book an Appointment
              </button>

              <div className="mt-10 flex flex-wrap lg:flex-nowrap items-center gap-6">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl font-bold text-headingColor">
                    5+
                  </h2>
                  <span className="w-20 h-2 bg-yellowColor rounded-full block mt-1"></span>
                  <p className="text-textColor mt-2">Years of Experience</p>
                </div>

                <div className="text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl font-bold text-headingColor">
                    2+
                  </h2>
                  <span className="w-20 h-2 bg-purpleColor rounded-full block mt-1"></span>
                  <p className="text-textColor mt-2">Office Locations</p>
                </div>

                <div className="text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl font-bold text-headingColor">
                    100%
                  </h2>
                  <span className="w-20 h-2 bg-irisBlueColor rounded-full block mt-1"></span>
                  <p className="text-textColor mt-2">Customer Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:w-1/2">
              <img
                className="w-full md:w-96 lg:w-full h-auto object-cover rounded-lg shadow-lg"
                src={heroImg01}
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>
      {/*=============================== hero section end ================*/}

      {/*=============================== service section start ================*/}
      <section className="py-16">
        <div className="container text-center mb-8">
          <h2 className="text-4xl font-bold text-headingColor">Our Services</h2>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-headingColor mb-4">
                {service.title}
              </h3>
              <p className="text-textColor mb-4">{service.shortDescription}</p>
              <button className="btn" onClick={() => openModal(service)}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Service Modal */}
      <ServiceModal
        isOpen={modalOpen}
        service={selectedService}
        onClose={closeModal}
      />
      {/*=============================== service section end ================*/}

      {/*=============================== Team section start ================*/}
      <section id="contact" className="team-section py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="team-member bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center p-6">
            <div className="w-full md:w-1/3 h-[225px] md:h-full flex-shrink-0">
              <img
                src={Img03}
                alt="Mr. Bonwell Mlenga"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 md:p-4 flex-grow">
              <h3 className="text-2xl font-bold text-headingColor mb-2 flex items-center">
                <FiUser className="mr-2 text-indigo-600" />
                Managing Partner - Mr. Bonwell Mlenga
              </h3>
              <Link
                to="/profile"
                className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-300 flex items-center"
              >
                View Full Profile <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-member bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center p-6">
            <div className="w-full md:w-1/3 h-[225px] md:h-full flex-shrink-0">
              <img
                src={Img03}
                alt="Mr. Clement Maulidi"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 md:p-4 flex-grow">
              <h3 className="text-2xl font-bold text-headingColor mb-2 flex items-center">
                <FiBriefcase className="mr-2 text-indigo-600" />
                Partner - Mr. Clement Maulidi
              </h3>
              <Link
                to="/profile"
                className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-300 flex items-center"
              >
                View Full Profile <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/*=============================== Team section end ================*/}

      {/* Testimonials Section (Example of additional content) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-headingColor mb-8">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <p className="text-lg text-textColor mb-4">
                  Working with BSM Attorneys has been an absolute game-changer
                  for our company. Their expertise and dedication have not only
                  resolved our legal challenges swiftly but also empowered us to
                  navigate complex regulatory landscapes with confidence. I
                  highly recommend their services to anyone seeking reliable
                  legal counsel
                </p>
                <div className="flex items-center">
                  <img
                    src={avatar}
                    alt="Client Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-headingColor">
                      John Doe
                    </h3>
                    <p className="text-textColor">CEO, ABC Company</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <p className="text-lg text-textColor mb-4">
                  I am incredibly impressed with the level of professionalism
                  and commitment displayed by BSM Attorneys. Their meticulous
                  approach to our case, coupled with their clear and transparent
                  communication, made the entire process seamless and
                  stress-free. Its a pleasure to work with such a dedicated
                  team.
                </p>
                <div className="flex items-center">
                  <img
                    src={avatar}
                    alt="Client Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-headingColor">
                      Jane Smith
                    </h3>
                    <p className="text-textColor">Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
