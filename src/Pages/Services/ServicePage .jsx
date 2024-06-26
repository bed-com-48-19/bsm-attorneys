import React, { useState } from 'react';
import { FiBriefcase, FiUsers, FiDatabase, FiLayers } from 'react-icons/fi'; // Import icons from react-icons
import ServiceModal from '../../components/Service/ServiceModal'; // Assuming ServiceModal component is defined
import services from '../../assets/data/service'; // Importing mock data

const ServicePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null); // State to hold selected service

  // Function to open modal and set selected service
  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedService(null);
    setModalOpen(false);
  };

  return (
    <section className="py-16">
      <div className="container text-center mb-8">
        <h2 className="text-4xl font-bold text-headingColor">Our Services</h2>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div className="flex justify-center items-center mb-4">
              {service.icon === 'briefcase' && <FiBriefcase className="text-4xl text-indigo-600 mb-4" />}
              {service.icon === 'users' && <FiUsers className="text-4xl text-indigo-600 mb-4" />}
              {service.icon === 'database' && <FiDatabase className="text-4xl text-indigo-600 mb-4" />}
              {service.icon === 'layers' && <FiLayers className="text-4xl text-indigo-600 mb-4" />}
            </div>
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
      
      {/* Service Modal */}
      <ServiceModal
        isOpen={modalOpen}
        service={selectedService}
        onClose={closeModal}
      />
    </section>
  );
};

export default ServicePage;
