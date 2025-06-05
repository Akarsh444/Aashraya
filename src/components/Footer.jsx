import React from 'react';
import { Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Copyright, Youtube } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from "./ui/button.jsx";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 - NGO Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Aashraya</h3>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex-shrink-0">
                <img src='https://prashraya.org/wp-content/uploads/elementor/thumbs/354150415_220248024272103_8189691252379910077_n-qtir2fw9zqtc7qrxft7est9yuk34qnuch8ihrepctc.jpg' alt="Aashraya Logo" className="h-12 rounded-full" />
              </div>
              <p className="text-sm ml-4">
                Empowering communities through sustainable development programs since 2015.
              </p>
            </div>
            <p className="text-sm text-slate-300 mt-4">
              We believe in creating lasting change by working directly with communities to address their most pressing needs.
            </p>
          </div>
          
          {/* Column 2 - Support Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Support Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-teal-300 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-teal-300 transition-colors">Contact Us</Link></li>
              <li><Link to="/donate" className="text-sm hover:text-teal-300 transition-colors">Donate</Link></li>
              <li><Link to="/volunteer" className="text-sm hover:text-teal-300 transition-colors">Volunteer</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-teal-300 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="mb-4 text-sm">
              Subscribe to our newsletter to receive updates on our projects and impact stories.
            </p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="py-2 px-4 rounded-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-100"
              />
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="mt-12 border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-medium mb-2 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-teal-300 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600">
                    <Facebook size={20} />
                  </div>
                </a>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600">
                    <Twitter size={20} />
                  </div>
                </a>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600">
                    <Instagram size={20} />
                  </div>
                </a>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600">
                    <Linkedin size={20} />
                  </div>
                </a>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600">
                    <Youtube size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 text-center text-sm">
            <p className="flex items-center justify-center text-slate-300">
              <Copyright size={16} className="mr-2" /> {currentYear} NGO Foundation. All rights reserved.
            </p>
            <div className="mt-2 flex justify-center space-x-6">
              <Link to="/privacy" className="hover:text-teal-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-teal-300 transition-colors">Terms & Conditions</Link>
              <Link to="/faq" className="hover:text-teal-300 transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 