import React from 'react';

const Features = () => {
  const features = [
    {
      emoji: "🌟",
      title: "Dreamy Worlds",
      description: "Create and explore enchanting realms where imagination knows no bounds"
    },
    {
      emoji: "👥",
      title: "Collaborative Storytelling",
      description: "Build stories together with friends in real-time collaborative adventures"
    },
    {
      emoji: "🎭",
      title: "Roleplay Magic",
      description: "Transform into any character and bring your stories to life"
    },
    {
      emoji: "💫",
      title: "Seamless Mobile",
      description: "Optimized for mobile devices with intuitive touch controls"
    },
    {
      emoji: "✨",
      title: "Beautiful Design",
      description: "Immerse yourself in stunning visuals and smooth animations"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-emoji">{feature.emoji}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 