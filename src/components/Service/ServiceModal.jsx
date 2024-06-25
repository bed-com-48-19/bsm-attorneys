import React from 'react';

const ServiceModal = ({ isOpen, service, onClose }) => {
  if (!isOpen) return null;

  // Split the main description into paragraphs
  const paragraphs = service.mainDescription.split('\n').filter(paragraph => paragraph.trim() !== '');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white max-w-lg p-8 rounded-lg shadow-lg relative transition-transform transform-gpu hover:scale-105 hover:shadow-2xl">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-2xl font-bold text-headingColor mb-4">{service.title}</h3>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-textColor mb-4">{paragraph}</p>
        ))}
        <button
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServiceModal;
