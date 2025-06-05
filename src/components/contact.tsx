import React from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast.js";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export interface ContactPageProps {
  title?: string;
  subtitle?: string;
  contactInfo?: {
    address: string;
    phone: string;
    email: string;
    workingHours: {
      weekdays: string;
      saturday: string;
    };
  };
}

export const ContactPageComplete: React.FC<ContactPageProps> = ({
  title = "Contact Us",
  subtitle = "Have questions or want to get involved? Reach out to us today.",
  contactInfo = {
    address: "104, Indore, Madhya Pradesh",
    phone: "+91 88188 50707",
    email: "support@prashraya.org",
    workingHours: {
      weekdays: "Monday - Friday: 9AM - 5PM",
      saturday: "Saturday: 10AM - 2PM"
    }
  }
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-orange-500" style={{ color: '#006699' }}>{title}</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mt-4">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-[#e6f5ff] p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#014467' }}>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#0066cc] hover:bg-[#0056b3] text-white"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
        <div>
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: '#014467' }}>Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-2" style={{ color: '#006798' }} />
                  <div>
                    <h3 className="text-gray-800 font-bold">Address</h3>
                    <p className="text-gray-700">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mt-1 mr-2" style={{ color: '#006798' }} />
                  <div>
                    <h3 className="text-gray-800 font-bold">Phone</h3>
                    <p className="text-gray-700">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 mr-2" style={{ color: '#006798' }} />
                  <div>
                    <h3 className="text-gray-800 font-bold">Email</h3>
                    <p className="text-gray-700">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mt-1 mr-2" style={{ color: '#006798' }} />
                  <div>
                    <h3 className="text-gray-800 font-bold">Working Hours</h3>
                    <p className="text-gray-700">{contactInfo.workingHours.weekdays}</p>
                    <p className="text-gray-700">{contactInfo.workingHours.saturday}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4 text-black">Connect With Us</h2>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden border border-gray-300 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1!2d75.805278!3d-22.669667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQwJzEwLjgiTiA3NcKwNDgnMTkuMCJF!5e0!3m2!1sen!2sus!4v1678999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageComplete; 