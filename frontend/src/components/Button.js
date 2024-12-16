import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = "px-6 py-3 rounded-lg shadow-md transition-all duration-300 " +
    "transform active:scale-95 focus:outline-none";
  
  const variantClasses = {
    primary: "bg-brand-primary text-white hover:bg-blue-600 focus:ring-2 focus:ring-brand-primary",
    secondary: "bg-brand-secondary text-white hover:bg-green-600 focus:ring-2 focus:ring-brand-secondary",
    accent: "bg-brand-accent text-white hover:bg-indigo-600 focus:ring-2 focus:ring-brand-accent"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className} 
        animate-wiggle hover:animate-none`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;