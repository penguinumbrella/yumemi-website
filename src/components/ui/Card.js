import React from 'react';

const Card = ({ 
  children, 
  className = "",
  hover = true,
  padding = "p-8"
}) => {
  const baseClasses = "bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl";
  const hoverClasses = hover ? "hover:scale-105 transition-transform duration-300 hover:bg-gray-800/70" : "";
  
  return (
    <div className={`${baseClasses} ${padding} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
