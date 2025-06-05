import React, { useState, useEffect } from "react";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { cn } from "./lib/utils";
import NavbarDropdown from "./components/NavbarDropdown.jsx";
import NavbarLink from "./components/NavbarLink.jsx";
import { Button } from "./components/ui/button.jsx";

const logoUrl = 'https://prashraya.org/wp-content/uploads/elementor/thumbs/354150415_220248024272103_8189691252379910077_n-qtir2fw9zqtc7qrxft7est9yuk34qnuch8ihrepctc.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation data structure for an NGO website
  const navItems = [
    { label: "Home", href: "/" },
    { 
      label: "About Us", 
      href: "#", 
        dropdown: [
        { label: "Our Mission", href: "#our-mission" },
        { label: "Our Team", href: "/our-team" },
        { label: "Our History", href: "#our-history" },
        ]
    },
    { 
      label: "Programs", 
      href: "#", 
        dropdown: [
        { label: "Education", href: "#education" },
        { label: "Healthcare", href: "#healthcare" },
        { label: "Community Development", href: "#community" },
        ]
    },
    { 
      label: "Get Involved", 
      href: "#", 
        dropdown: [
        { label: "Volunteer", href: "#volunteer" },
        { label: "Partner With Us", href: "#partner" },
        { label: "Fundraise", href: "#fundraise" },
      ] 
    },
    { label: "Contact", href: "#contact" },
  ];

  // Track scroll position to transform navbar
    useEffect(() => {
        const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleNavbarVisibility = () => {
    setIsHidden(!isHidden);
    // Close mobile menu when hiding navbar
    if (!isHidden) { // Only close if currently visible and being hidden
      setIsMobileMenuOpen(false);
    }
  };

    return (
    <>
      {/* Navbar placeholder when hidden */}
      {isHidden && (
        <div 
          className="fixed top-4 right-4 z-50 bg-primary p-2 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={() => { setIsHidden(false); setIsMobileMenuOpen(true); }}
        >
          <Menu className="text-primary-foreground" />
        </div>
      )}

      <header 
        className={cn(
          "fixed w-full transition-all duration-500 z-40",
          isHidden ? "transform -translate-y-full invisible opacity-0" : "transform translate-y-0 visible opacity-100",
          isScrolled ? "top-2" : "top-0"
        )}
      >
        <div 
          className={cn(
            "transition-all duration-500",
            isScrolled 
              ? "bg-slate-800/90 backdrop-blur-md shadow-md max-w-fit rounded-full px-6 mx-auto py-2"
              : "bg-slate-800 w-full px-6 py-4"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-white flex items-center">
                 <img src={logoUrl} alt="Aashraya Logo" className="h-12 mr-2 rounded-full"/>
                <span className="mr-2 font-serif">Aashraya</span>
                <span className="text-sm font-light">Empowering Communities</span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                item.dropdown ? (
                  <NavbarDropdown 
                    key={index} 
                    item={item} 
                    isCompact={isScrolled}
                  />
                ) : (
                  <NavbarLink 
                    key={index} 
                    href={item.href} 
                    isCompact={isScrolled}
                    className="text-white"
                  >
                    {item.label}
                  </NavbarLink>
                )
              ))}
              
              {/* Donate Button */}
              <Button 
                variant="secondary"
                className="ml-4 bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold"
                size={isScrolled ? "sm" : "default"}
              >
                <Heart className="mr-1 h-4 w-4" /> Donate
              </Button>
              
                <button 
                onClick={toggleNavbarVisibility}
                className="ml-4 p-2 text-white hover:text-gray-200 transition-colors"
                aria-label="Hide navbar"
              >
                <X size={18} />
                </button>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              {/* Donate button is now only in the expanded mobile menu */}
              
                    <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-white hover:text-gray-200 transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
            </div>
                </div>

          {/* Mobile Navigation */}
                {isMobileMenuOpen && (
            <div className={cn(
              "fixed inset-x-0 top-0 z-50 flex flex-col h-[90vh] bg-slate-800 px-6 py-8 shadow-md md:hidden overflow-hidden transition-all duration-[3000] ease-in-out",
               isMobileMenuOpen ? "top-0" : "-top-full invisible pointer-events-none"
            )}>
              {/* Logo and Title in Mobile Menu */}
              <div className="flex items-center mb-6">
                <a href="/" className="text-xl font-bold text-white flex items-center">
                   <img src={logoUrl} alt="Aashraya Logo" className="h-10 mr-2 rounded-full"/>
                  <span className="mr-2 font-serif">Aashraya</span>
                  <span className="text-sm font-light">Empowering Communities</span>
                </a>
              </div>
              {/* Scrollable navigation links */}
              <nav className="flex flex-col space-y-3 flex-grow overflow-y-auto">
                {navItems.map((item, index) => (
                  <div key={index} className="w-full">
                    {item.dropdown ? (
                      <NavbarDropdown 
                        item={item} 
                        isMobile={true} 
                        isCompact={isScrolled}
                      />
                    ) : (
                      <NavbarLink 
                        href={item.href} 
                        isMobile={true}
                        isCompact={isScrolled}
                        className="text-white"
                      >
                        {item.label}
                      </NavbarLink>
                    )}
                  </div>
                ))}
              </nav>
              {/* Buttons at the bottom of the half-height container */}
              <div className="flex flex-col items-center space-y-2 mt-auto">
                <Button 
                  variant="secondary"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-4 text-lg"
                  size="lg"
                >
                  <Heart className="mr-2 h-5 w-5" /> Donate
                </Button>
                <button 
                  onClick={toggleNavbarVisibility}
                  className="flex items-center justify-center w-full p-2 text-white hover:text-gray-200 transition-colors bg-slate-700 shadow-md rounded-md"
                  aria-label="Hide navbar"
                >
                  Hide Navbar <X size={18} className="ml-2" />
                </button>
              </div>
            </div>
                )}
        </div>
      </header>
      
      {/* Spacer element to prevent content from being hidden under the navbar */}
      <div className={cn(
        "transition-all duration-300",
        isScrolled ? "h-16" : "h-20"
      )} />
    </>
  );
};

export default Navbar; 