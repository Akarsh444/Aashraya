import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const VolunteerRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    areaOfInterest: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow images
  const slideshowImages = [
    {
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Plant Trees Together",
      subtitle: "Join our community in creating a greener future"
    },
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Community Action",
      subtitle: "Working together for environmental change"
    },
    {
      url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Green Earth Initiative",
      subtitle: "Every contribution makes a lasting difference"
    },
    {
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Nature Conservation",
      subtitle: "Protecting our environment for future generations"
    }
  ];

  // Auto-rotate slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        areaOfInterest: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
      {/* Left Side - Form Section */}
      <div className="lg:w-1/2 bg-white p-8 lg:p-16 flex flex-col justify-center min-h-screen">
        <div className="max-w-md mx-auto w-full">
          {/* Title Section */}
          <div className="mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Join us for <span className="text-teal-600">Volunteer!</span>
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Every contribution makes a difference. Join us for Plant Trees and flowers.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name*
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="h-12 rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name*
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="h-12 rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email*
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-12 rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone*
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 12345 67890"
                value={formData.phone}
                onChange={handleInputChange}
                required
                maxLength={15}
                className="h-12 rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                City*
              </Label>
              <Input
                id="city"
                name="city"
                type="text"
                placeholder="Your City"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="h-12 rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Area of Interest */}
            <div className="space-y-2">
              <Label htmlFor="areaOfInterest" className="text-sm font-medium text-gray-700">
                Area of Interest*
              </Label>
              <Input
                id="areaOfInterest"
                name="areaOfInterest"
                type="text"
                placeholder="e.g., Environmental, Education, Community Service"
                value={formData.areaOfInterest}
                onChange={handleInputChange}
                required
                className="h-12 rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition-colors duration-300 h-12"
                disabled={isSubmitted}
              >
                {isSubmitted ? "Submitted!" : "Join the Team"}
              </Button>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="text-center p-4 bg-teal-50 border border-teal-200 rounded-lg animate-fade-in">
                <p className="text-teal-700 font-medium">
                  Thank you for registering! We'll be in touch soon.
                </p>
              </div>
            )}
          </form>

          {/* Important Information */}
          <div className="mt-8 space-y-3">
            <h3 className="text-teal-600 font-semibold text-sm">Important Information</h3>
            <ul className="text-gray-600 text-sm space-y-2 leading-relaxed">
              <li>• You'll receive a confirmation email shortly.</li>
              <li>• We'll send a reminder one day before the event.</li>
              <li>• Please bring a water bottle and comfortable shoes.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Side - Slideshow Section */}
      <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-screen overflow-hidden">
        {/* Slideshow Container */}
        <div className="relative w-full h-full min-h-[400px] lg:min-h-screen">
          {slideshowImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${image.url}')`
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-20 left-8 right-8 text-white flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold mb-3 drop-shadow-lg">
                  {image.title}
                </h2>
                <p className="text-base lg:text-lg drop-shadow-md opacity-90 leading-relaxed mb-6">
                  {image.subtitle}
                </p>
                
                {/* Dot indicators */}
                <div className="flex space-x-2">
                  {slideshowImages.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setCurrentSlide(dotIndex)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 border border-white/30 ${
                        dotIndex === currentSlide 
                          ? 'bg-white shadow-sm' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${dotIndex + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerRegistration; 