import React, { useState } from "react";
import { Link } from "react-router-dom";
import services from "../../assets/data/service";
import heroImg01 from "../../assets/images/hammer.jpg";
import Img02 from "../../assets/images/ff.jpg";
import Img03 from "../../assets/images/law2.jpg";
import avatar from "../../assets/images/avatar.png";
import ServiceModal from "../Service/ServiceModal";

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
      <section className="hero__section pt-12 2xl:h-96">
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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Member 1 */}
          <div className="team-member bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center">
            <div className="w-full md:w-[300px] h-[225px] md:h-full md:flex-shrink-0">
              <img
                src={Img02}
                alt="Mr. Bonwell Mlenga"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-headingColor mb-2">
                Managing Partner - Mr. Bonwell Mlenga
              </h3>
              <p className="text-lg text-textColor mb-4">
                Mr. Bonwell Mlenga was admitted to the bar on 14th April, 2016.
                Before founding BSM Attorneys, he gained valuable experience at
                Chizumila Msiska & Company and later at the Ministry of Justice
                and Constitutional Affairs, where he served as a Senior State
                Advocate and Principal State Advocate. His practice spans
                various areas of law, with notable involvement representing
                ministries and government institutions such as the Malawi Police
                Service, Malawi Defence Force, and others.
              </p>
              <a
                href="link_to_full_profile_1"
                className="btn bg-primaryColor py-2 px-4 rounded-full text-white font-semibold inline-block"
              >
                View Full Profile
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-member bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row items-center mt-8 md:mt-0">
            <div className="w-full md:w-[300px] h-[225px] md:h-full md:flex-shrink-0">
              <img
                src={Img03}
                alt="Mr. Clement Maulidi"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-headingColor mb-2">
                Partner - Mr. Clement Maulidi
              </h3>
              <p className="text-lg text-textColor mb-4">
                Mr. Clement Maulidi was admitted to the bar on 18th May, 2017.
                Prior to joining BSM Attorneys, he served in various capacities
                at the Ministry of Justice and Constitutional Affairs, including
                as a Senior State Advocate and Principal State Advocate. His
                extensive experience includes handling legal matters for
                ministries and government bodies such as the Malawi Police
                Service, Malawi Defence Force, and more.
              </p>
              <a
                href="link_to_full_profile_2"
                className="btn bg-primaryColor py-2 px-4 rounded-full text-white font-semibold inline-block"
              >
                View Full Profile
              </a>
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
                <div className="flex items-center mb-4">
                  <img
                    src={avatar}
                    alt="John Doe Avatar"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold text-headingColor">John Doe</p>
                    <p className="text-sm text-gray-500">CEO, Company XYZ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
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
                <div className="flex items-center mb-4">
                  <img
                    src={avatar}
                    alt="Jane Smith Avatar"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold text-headingColor">Jane Smith</p>
                    <p className="text-sm text-gray-500">Director, ABC Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section End */}
    </>
  );
};

export default HeroSection;
