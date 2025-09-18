import React from 'react';
import { Zap, Shield, Download, Palette, Clock, Users } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description: 'Transform your artwork in seconds with our optimized AI processing pipeline.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Multiple Styles',
      description: 'Choose from photorealistic, artistic, or custom transformation styles.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Privacy First',
      description: 'Your artwork is processed securely and never stored without permission.',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: 'High Resolution',
      description: 'Download your transformations in up to 4K resolution for printing.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Batch Processing',
      description: 'Upload multiple images and transform them all at once to save time.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Gallery',
      description: 'Share your creations and get inspired by other artists worldwide.',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Artists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform provides everything you need to transform your creative vision into stunning photorealistic artwork.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-purple-100">Images Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-purple-100">Happy Artists</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4K</div>
              <div className="text-purple-100">Max Resolution</div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Upload</h4>
              <p className="text-gray-600">Upload your sketch, drawing, or photo using our simple drag-and-drop interface.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Transform</h4>
              <p className="text-gray-600">Our AI analyzes your artwork and applies photorealistic enhancements in seconds.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Download</h4>
              <p className="text-gray-600">Download your stunning transformation in high resolution and share with the world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;