import React from 'react';

const SectionHeader = ({ 
  title, 
  description, 
  className = "text-center mb-16",
  titleClass = "text-4xl md:text-5xl font-bold text-white mb-6",
  descriptionClass = "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
}) => {
  return (
    <div className={className}>
      <h2 className={titleClass}>
        {title}
      </h2>
      {description && (
        <p className={descriptionClass}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
