import React from 'react';
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, type, id, name, value, onChange, placeholder, required, ...props }, ref) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input }; 