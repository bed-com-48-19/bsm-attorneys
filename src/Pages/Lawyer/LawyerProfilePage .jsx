import { useState } from "react";

import ManagingPartnerImage from "../../assets/images/img4.jpg"; 
import ManagingPartnerImage2 from "../../assets/images/img5.jpg"; 
import PartnerImage from "../../assets/images/law2.jpg"; 
import PartnerImage2 from "../../assets/images/img7.jpg"; 

const LawyerProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  const handleViewProfile = (lawyer) => {
    setSelectedLawyer(lawyer);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLawyer(null);
  };

  const formatBio = (bio) => {
    return bio.split('\n').map((paragraph, index) => (
      <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
    ));
  };

  const lawyers = [
    {
      id: 1,
      name: "Bonwell Mlenga",
      role: "Managing Partner",
      image: ManagingPartnerImage,
      image2: ManagingPartnerImage2,
      bio: `The Managing Partner, Mr. Bonwell Mlenga, was admitted to the bar on 14th April, 2016. Before setting up BSM Attorneys, he worked for Chizumila Msiska & Company in Blantyre as a Legal Executive. He then left the law firm and joined the Ministry of Justice and Constitutional Affairs where he worked as a Senior State Advocate and later promoted to the post of Principal State Advocate. He left Ministry of Justice in December 2022 to set up his own practice, BSM Attorneys.\n\nMr. Mlenga has handled matters in various areas of the law. Whilst at Ministry of Justice and Constitutional Affairs, he worked under the Attorney General’s Office and he handled matters on behalf of almost all ministries, and government institutions such as Malawi Police Service, Malawi Defence Force, National Commission for Science and Technology, and city councils, among others.\n\nMr. Mlenga holds a Bachelor of Laws (Honours) from the University of Malawi (Chancellor College) and a Master of Laws in Intellectual Property (With Specialization in Patent Law and Design Law) from Ankara University in Turkey.\n\nHe is a member of the Malawi Law Society.`
    },
    {
      id: 2,
      name: "Clement Maulidi",
      role: "Partner",
      image: PartnerImage,
      image2: PartnerImage2,
      bio: `The Partner, Mr. Clement Maulidi, was admitted to the bar on 18th May, 2017. Before joining BSM Attorneys as a Partner in 2023, he worked for the Ministry of Justice and Constitutional Affairs where he worked as a Senior State Advocate and later promoted to the post of Principal State Advocate. He left Ministry of Justice in October, 2023 and joined BSM Attorneys as a Partner.\n\nMr. Maulidi has handled matters in various areas of the law. Whilst at Ministry of Justice and Constitutional Affairs, he worked under the Attorney General’s Office, the Solicitor General and the Directorate of Public Prosecutions. Under the Attorney General, he handled matters on behalf of almost all ministries, and government institutions such as Malawi Police Service, Malawi Defence Force, Department of Parks and Wildlife, Directorate of Road traffic and Safety Services, Malawi Communication Regulatory Authority, district councils and city councils, among others.\n\nWhilst working under the Solicitor General, Mr. Maulidi was involved in drafting and vetting of Contracts, Memorandums of Understanding, drafting legal opinions and providing legal advice during negotiations.\n\nUnder the Directorate of Public Prosecution, Mr. Maulidi was mainly involved in prosecuting asset recovery cases. When executing this responsibility, Mr. Maulidi worked with other state agencies such as Malawi Police Service, the Anti-Corruption Bureau, Malawi Revenue Authority and Finance Intelligent Authority.\n\nMr. Maulidi holds a Bachelor of Laws (Honours), Bachelor of Arts (Human Resource Management) and Bachelor of Arts (Humanities) all from the University of Malawi (Chancellor College).\n\nHe is a member of the Malawi Law Society.`
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-10">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Our Team
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawyers.map(lawyer => (
              <div key={lawyer.id} className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="w-48 h-48 overflow-hidden mb-4">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-indigo-600 mb-2">
                  {lawyer.name}
                </h3>
                <p className="text-gray-700 mb-2">{lawyer.role}</p>
                <button
                  onClick={() => handleViewProfile(lawyer)}
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
                >
                  View Full Profile
                </button>
              </div>
            ))}
          </div>

          {showModal && selectedLawyer && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75 flex justify-center items-start pt-16 md:pt-32">
              <div className="bg-white rounded-lg overflow-hidden max-w-full md:max-w-3xl mx-4 p-6 md:p-8 relative">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">{selectedLawyer.name}</h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    aria-label="Close modal"
                  >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <img
                    src={selectedLawyer.image}
                    alt={selectedLawyer.name}
                    className="w-full md:w-1/2 h-auto object-contain rounded-lg shadow-md"
                  />
                  <img
                    src={selectedLawyer.image2} 
                    alt={selectedLawyer.name}
                    className="w-full md:w-1/2 h-auto object-contain rounded-lg shadow-md"
                  />
                </div>
                {formatBio(selectedLawyer.bio)}
                <div className="flex justify-end mt-6">
                  <button
                    onClick={closeModal}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LawyerProfilePage;
