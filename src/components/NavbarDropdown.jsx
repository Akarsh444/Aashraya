import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const NavbarDropdown = ({ item, isMobile = false, isCompact = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" onMouseLeave={() => !isMobile && setIsOpen(false)}>
      <button
        onClick={toggleDropdown}
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        className={cn(
          "flex items-center justify-between transition-all duration-200",
          isMobile ? "w-full text-left p-3" : "px-4 py-2",
          isCompact ? "text-sm" : "text-base",
          "text-white hover:text-gray-200 font-medium focus:outline-none"
        )}
        aria-expanded={isOpen}
      >
        {item.label}
        <ChevronDown
          size={isMobile ? 20 : isCompact ? 14 : 16}
          className={cn(
            "ml-1 transition-transform duration-200", 
            isOpen ? "transform rotate-180" : ""
          )}
        />
      </button>

      {(isOpen || !isMobile) && (
        <div
          className={cn(
            "transition-all duration-200 origin-top-right",
            isMobile
              ? "mt-1 w-full"
              : "absolute left-0 min-w-[200px] shadow-lg rounded-md",
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 invisible",
            isCompact && !isMobile ? "bg-blue-700/90 dark:bg-blue-800/90 backdrop-blur-md" : "bg-blue-700 dark:bg-blue-800"
          )}
        >
          <div className={cn(
            "py-2",
            !isMobile && "border border-blue-600 dark:border-blue-700 rounded-md"
          )}>
            {item.dropdown?.map((subItem, idx) => (
              <a
                key={idx}
                href={subItem.href}
                className={cn(
                  "block transition-colors duration-200 text-white hover:bg-blue-600 dark:hover:bg-blue-700",
                  isMobile ? "p-3" : "px-4 py-2",
                  isCompact ? "text-sm" : "text-base"
                )}
              >
                {subItem.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown; 