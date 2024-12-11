// src/components/Header.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  return <footer data-aos="fade-up" className="footer">This is the footer</footer>;
}

export default Footer;