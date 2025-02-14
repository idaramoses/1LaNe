import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare email body
    const emailBody = `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@1laneco.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col gap-16 p-8 bg-black text-white px-20 md:px-4 font-poppins">
      <img 
      src='/images/Artist Representation.jpg' 
      alt={'contact-us'} 
      className="rounded-lg mb-4 h-32 w-full object-cover" 
    />
    <div className='flex flex-row md:flex-col gap-16 '>
    <div className="flex-1">
        <h2 className="text-3xl font-normal mb-8">Get in touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-2 text-sm">First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded text-[#989898] bg-white border border-white focus:border-[#989898] focus:outline-none b"
                placeholder="First name"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm">Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded text-[#989898] bg-white border border-white focus:border-[#989898] focus:outline-none"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded  text-[#989898] bg-white border border-white focus:border-[#989898] focus:outline-none"
              placeholder="you@companyname.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Phone number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded text-[#989898] bg-white border border-white focus:border-[#989898] focus:outline-none"
              placeholder="000000"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 rounded text-[#989898] bg-white border border-white focus:border-[#989898] focus:outline-none"
              placeholder="Type a message"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-transparent border border-white text-white rounded hover:bg-white hover:text-black transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Join Team Section */}
      <div className="flex-1 md:mb-10">
        <h2 className="text-3xl md:text-xl font-normal mb-8 md:mb-4">Join Our Team</h2>
        <div className="space-y-4">
          <h3 className="text-2xl md:text-base mb-4">Interested in joining our team?</h3>
          <p className="text-[#999999] md:text-sm">
            Send your resume to{' '}
            <a 
              href="mailto:careers@1laneco.com"
              className="text-white hover:text-blue-400"
            >
              careers@1laneco.com
            </a>
          </p>
        </div>
      </div>
    </div>
     
    </div>
  );
};

export default ContactForm;