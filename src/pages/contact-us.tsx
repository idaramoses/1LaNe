import { useState, useEffect } from "react";
import Navigationbar from "@/components/Navigationbar";

import 'aos/dist/aos.css';
import AOS from 'aos';
import ContactForm from "@/components/ContactForm";



const ContactUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const timer = setInterval(() => {
    }, );

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex relative flex-col items-center justify-center bg-black text-white font-poppins ">
      <section   className="relative h-screen mb-4 w-full">
              <Navigationbar />
              <ContactForm/>
            </section>

    </div>
  );
};

export default ContactUs;