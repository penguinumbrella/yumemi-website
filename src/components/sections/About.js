import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const About = () => {
  const features = [
    {
      icon: "👤",
      title: "Create Characters",
      description: "Design unique characters with rich backstories and personalities. Express yourself through custom avatars and detailed character sheets."
    },
    {
      icon: "🌍",
      title: "Explore Worlds",
      description: "Journey through beautifully crafted realms and discover hidden stories. Each world is a canvas for collaborative storytelling."
    },
    {
      icon: "🗺️",
      title: "Map-Based Roleplay",
      description: "Navigate interactive maps where every location holds potential adventures. Connect with other players in real-time collaborative experiences."
    }
  ];

  return (
    <SectionWrapper>
      <SectionHeader
        title="Collaborative Storytelling"
        description="Yumemi bridges the gap between traditional roleplaying and modern mobile gaming. Create immersive stories together in a low-effort MMO experience that puts creativity and connection first."
      />

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="text-center group">
            <div className="text-6xl mb-6 group-hover:animate-bounce">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About; 