import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';

const TechBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building the Map System: From Concept to Reality",
      excerpt: "How we're designing an intuitive map system that feels both magical and practical for collaborative storytelling. Learn about our approach to creating seamless navigation that enhances rather than distracts from the roleplay experience.",
      category: "Development",
      date: "January 15, 2024",
      readTime: "5 min read",
      image: "🗺️"
    },
    {
      id: 2,
      title: "Character Vetting Logic: Balancing Creativity with Safety",
      excerpt: "Our approach to ensuring creative freedom while maintaining a safe, welcoming environment for all players. Discover how we're building systems that encourage diverse storytelling while protecting our community.",
      category: "Design",
      date: "January 10, 2024",
      readTime: "4 min read",
      image: "👤"
    },
    {
      id: 3,
      title: "Combat Mode Ideas: Making Conflict Meaningful",
      excerpt: "Exploring how we can make combat feel impactful without overshadowing the storytelling experience. From turn-based systems to collaborative conflict resolution, we're rethinking what combat means in a roleplay-focused game.",
      category: "Development",
      date: "January 5, 2024",
      readTime: "6 min read",
      image: "⚔️"
    }
  ];

  const getCategoryStyle = (category) => {
    return category === 'Development' 
      ? 'bg-purple-900/50 text-purple-300 border border-purple-700' 
      : 'bg-indigo-900/50 text-indigo-300 border border-indigo-700';
  };

  return (
    <SectionWrapper background="bg-gray-900">
      <SectionHeader
        title="Tech Blog"
        description="Behind-the-scenes insights into Yumemi's development, challenges we face, and how we're building the future of collaborative storytelling."
      />

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.map((post) => (
          <Card key={post.id} padding="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryStyle(post.category)}`}>
                {post.category}
              </span>
              <span className="text-sm text-gray-400">{post.date}</span>
            </div>
            
            <div className="text-4xl mb-4">{post.image}</div>
            
            <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-gray-300 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">{post.readTime}</span>
              <Button variant="text" className="!px-0 !py-0 !shadow-none">
                Read More →
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Card className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-6">
            Get notified about new blog posts, development updates, and beta testing opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>Subscribe to Updates</Button>
            <Button variant="secondary">View All Posts</Button>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default TechBlog; 