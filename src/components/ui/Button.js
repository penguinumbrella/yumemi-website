import React from 'react';

const Button = ({ 
  children, 
  variant = "primary", 
  className = "",
  onClick,
  type = "button",
  disabled = false
}) => {
  const baseClasses = "px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700",
    secondary: "bg-gray-700/50 text-white hover:bg-gray-700/70 border border-gray-600",
    transparent: "bg-white/20 text-white backdrop-blur-md hover:bg-white/30",
    text: "text-purple-400 font-medium hover:text-purple-300 transition-colors"
  };

  const variantClasses = variants[variant] || variants.primary;
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
