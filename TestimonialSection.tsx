import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Digital Artist',
      avatar: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884721610_6aece889.webp',
      rating: 5,
      content: 'This platform completely transformed my workflow. I can now turn my rough sketches into stunning photorealistic art in seconds. The quality is incredible!'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Concept Artist',
      avatar: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884724218_55594943.webp',
      rating: 5,
      content: 'As a concept artist for games, this tool has been a game-changer. I can quickly visualize ideas and present them to clients with photorealistic quality.'
    },
    {
      name: 'Emily Watson',
      role: 'Art Student',
      avatar: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884726125_e7a7eb33.webp',
      rating: 5,
      content: 'I love how easy it is to use. Upload, click transform, and boom - my simple drawings become masterpieces. Perfect for my art portfolio!'
    },
    {
      name: 'David Kim',
      role: 'Freelance Illustrator',
      avatar: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884728132_ccf360ea.webp',
      rating: 5,
      content: 'The AI understands artistic intent so well. It enhances my work while keeping the original vision intact. My clients are amazed by the results.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Art Teacher',
      avatar: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884729912_44d1c467.webp',
      rating: 5,
      content: 'I use this with my students to show them the potential of their artwork. It\'s incredibly motivating and helps them see their creative vision realized.'
    },
    {
      name: 'Alex Morgan',
      role: 'Creative Director',
      avatar: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884731671_618f73ce.webp',
      rating: 5,
      content: 'The batch processing feature saves our team hours of work. We can transform multiple concept sketches simultaneously and present them to clients quickly.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by Artists Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of artists, designers, and creators who are transforming their creative process with our AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-purple-200" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-8">Trusted by creative professionals at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Adobe</div>
            <div className="text-2xl font-bold text-gray-400">Pixar</div>
            <div className="text-2xl font-bold text-gray-400">Netflix</div>
            <div className="text-2xl font-bold text-gray-400">Disney</div>
            <div className="text-2xl font-bold text-gray-400">Ubisoft</div>
            <div className="text-2xl font-bold text-gray-400">EA Games</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Art?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join over 15,000 artists who have already discovered the power of AI-enhanced creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;