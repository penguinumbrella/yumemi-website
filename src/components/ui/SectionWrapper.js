import React from 'react';

const SectionWrapper = ({ 
  children, 
  className = "", 
  background = "bg-gradient-to-b from-gray-900 to-gray-800",
  containerClass = "max-w-6xl mx-auto px-6"
}) => {
  return (
    <section className={`py-20 ${background} ${className}`}>
      <div className={containerClass}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
