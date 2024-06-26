import { FiMapPin, FiPhone, FiMail, FiUser, FiSend } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <section className="contact-us py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-headingColor mb-12">
          Contact Us
        </h2>

        <div className="flex flex-wrap -mx-6">
          {/* Lilongwe Office */}
          <div className="w-full lg:w-1/2 px-6 mb-12 lg:mb-0">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-headingColor mb-4 flex items-center">
                  <FiMapPin className="mr-3 text-primaryColor" /> Lilongwe Office
                </h3>
                <p className="text-lg text-textColor mb-2">
                  La Rose House, First Floor
                </p>
                <p className="text-lg text-textColor mb-2">
                  Behind Mt. Meru Filling Station, Along Lubani Road, Area 2
                </p>
                <p className="text-lg text-textColor mb-2">
                  Post Office Box 2177, Lilongwe
                </p>
                <p className="text-lg text-textColor mb-2">MALAWI</p>
                <p className="text-lg text-textColor mb-2 flex items-center">
                  <FiPhone className="mr-2 text-primaryColor" /> +265 999 014 717
                </p>
                <p className="text-lg text-textColor mb-2 flex items-center">
                  <FiMail className="mr-2 text-primaryColor" />
                  <a href="mailto:bsmlawconsultants@gmail.com" className="text-primaryColor">
                    bsmlawconsultants@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Blantyre Office */}
          <div className="w-full lg:w-1/2 px-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-headingColor mb-4 flex items-center">
                  <FiMapPin className="mr-3 text-primaryColor" /> Blantyre Office
                </h3>
                <p className="text-lg text-textColor mb-2">
                  Pearl Arcade, First Floor
                </p>
                <p className="text-lg text-textColor mb-2">
                  Opposite Lonrho Total Filling Station
                </p>
                <p className="text-lg text-textColor mb-2">
                  P.O. Box 51935, Limbe, Blantyre
                </p>
                <p className="text-lg text-textColor mb-2">MALAWI</p>
                <p className="text-lg text-textColor mb-2 flex items-center">
                  <FiPhone className="mr-2 text-primaryColor" /> +265 994 004398
                </p>
                <p className="text-lg text-textColor mb-2 flex items-center">
                  <FiMail className="mr-2 text-primaryColor" />
                  <a href="mailto:ccmaulidi@gmail.com" className="text-primaryColor">
                    ccmaulidi@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex flex-wrap mt-12 -mx-6">
          <div className="w-full lg:w-1/2 px-6 mb-12 lg:mb-0">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-headingColor mb-4 flex items-center">
                  <FiMapPin className="mr-3 text-primaryColor" /> Find Us
                </h3>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31699.758572584213!2d33.780870183380315!3d-13.9784711534116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19015ba5d6d9a78b%3A0xf3a827b75d4e5f19!2sLilongwe!5e0!3m2!1sen!2smw!4v1649766760864!5m2!1sen!2smw"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Lilongwe Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-headingColor mb-4 flex items-center">
                  <FiMail className="mr-3 text-primaryColor" /> Get In Touch
                </h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-lg text-textColor mb-2" htmlFor="name">
                      Name
                    </label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <FiUser className="p-3 text-primaryColor" size={24} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 text-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg text-textColor mb-2" htmlFor="email">
                      Email
                    </label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <FiMail className="p-3 text-primaryColor" size={24} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 text-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg text-textColor mb-2" htmlFor="message">
                      Message
                    </label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-2 text-lg"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primaryColor text-white py-2 px-4 rounded-lg text-lg font-semibold flex items-center justify-center"
                    >
                      <FiSend className="mr-2" /> Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
