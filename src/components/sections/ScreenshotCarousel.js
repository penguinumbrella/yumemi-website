import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ScreenshotCarousel = () => {
  const screenshots = [
    {
      id: 1,
      image: "/images/screenshots/character-creation.png",
      caption: "Character Creation",
      description: "Design your unique character with rich customization options"
    },
    {
      id: 2,
      image: "/images/screenshots/world-map.png",
      caption: "World Map",
      description: "Explore beautiful realms and discover hidden stories"
    },
    {
      id: 3,
      image: "/images/screenshots/chat-interface.png",
      caption: "Real-time Chat",
      description: "Connect with other players in immersive storytelling"
    },
    {
      id: 4,
      image: "/images/screenshots/character-profile.jpg",
      caption: "Character Profile",
      description: "Manage your character's story and development"
    },
    {
      id: 5,
      image: "/images/screenshots/world-exploration.jpg",
      caption: "World Exploration",
      description: "Navigate through enchanting environments"
    },
    {
      id: 6,
      image: "/images/screenshots/customization.jpg",
      caption: "Customization",
      description: "Personalize your experience with unique options"
    },
    {
      id: 7,
      image: "/images/screenshots/guild-system.jpg",
      caption: "Guild System",
      description: "Join communities and build lasting friendships"
    },
    {
      id: 8,
      image: "/images/screenshots/adventures.jpg",
      caption: "Adventures",
      description: "Embark on epic quests and challenges"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See Yumemi in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Take a peek at the dreamy interface and immersive experience
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="screenshot-swiper"
          >
            {screenshots.map((screenshot) => (
              <SwiperSlide key={screenshot.id}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                  {/* Screenshot Container */}
                  <div className="aspect-[1170/2532] bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={screenshot.image} 
                      alt={screenshot.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-center z-10" style={{ display: 'none' }}>
                      <div>
                        <div className="text-4xl mb-2 animate-pulse group-hover:scale-110 transition-transform duration-300">
                          📱
                        </div>
                        <p className="text-white/80 text-xs">Screenshot {screenshot.id}</p>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-sm font-semibold mb-1">
                      {screenshot.caption}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 backdrop-blur-md rounded-full p-3 text-white hover:bg-gray-700/50 transition-colors border border-gray-600 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 backdrop-blur-md rounded-full p-3 text-white hover:bg-gray-700/50 transition-colors border border-gray-600 z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination flex justify-center mt-8 space-x-3"></div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            💡 Swipe to explore more screenshots
          </p>
        </div>
      </div>

      <style jsx>{`
        .screenshot-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #6b7280;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .screenshot-swiper .swiper-pagination-bullet-active {
          background: #8b5cf6;
          transform: scale(1.2);
        }
        
        .screenshot-swiper .swiper-button-prev,
        .screenshot-swiper .swiper-button-next {
          background: rgba(31, 41, 55, 0.5);
          backdrop-filter: blur(8px);
          border: 1px solid #4b5563;
          transition: all 0.3s ease;
        }
        
        .screenshot-swiper .swiper-button-prev:hover,
        .screenshot-swiper .swiper-button-next:hover {
          background: rgba(55, 65, 81, 0.5);
        }
      `}</style>
    </section>
  );
};

export default ScreenshotCarousel; 