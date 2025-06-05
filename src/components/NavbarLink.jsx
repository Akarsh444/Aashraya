import React from "react";
import { cn } from "../lib/utils";

const NavbarLink = ({ href, children, isMobile = false, isCompact = false, className }) => {
  return (
    <a
      href={href}
      className={cn(
        "transition-all duration-200",
        isMobile ? "w-full text-left p-3" : "px-4 py-2",
        isCompact ? "text-sm" : "text-base",
        "text-white hover:text-gray-200 font-medium",
        className
      )}
    >
      {children}
    </a>
  );
};

export default NavbarLink; 