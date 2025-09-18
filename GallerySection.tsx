import React, { useState } from 'react';
import { Download, Eye, Heart, Share2 } from 'lucide-react';

interface TransformationItem {
  id: string;
  original: string;
  transformed: string;
  title: string;
  category: string;
  likes: number;
}

const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TransformationItem | null>(null);
  const [filter, setFilter] = useState('all');

  // Using provided images and generated ones
  const transformations: TransformationItem[] = [
    {
      id: '1',
      original: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884708667_a867bfd8.webp',
      transformed: 'https://d64gsuwffb70l.cloudfront.net/68c617854cfe77e04a52fe72_1757884644665_96477dd2.png',
      title: 'Mystical Otter',
      category: 'Animals',
      likes: 234
    },
    {
      id: '2',
      original: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884710380_9728651b.webp',
      transformed: 'https://d64gsuwffb70l.cloudfront.net/68c617854cfe77e04a52fe72_1757884646092_248c7fdf.png',
      title: 'Majestic Elephant',
      category: 'Animals',
      likes: 189
    },
    {
      id: '3',
      original: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884712145_32d814a1.webp',
      transformed: 'https://d64gsuwffb70l.cloudfront.net/68c617854cfe77e04a52fe72_1757884647121_53b49708.png',
      title: 'Desert Scorpion',
      category: 'Animals',
      likes: 156
    },
    {
      id: '4',
      original: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884714237_a76629a5.webp',
      transformed: 'https://d64gsuwffb70l.cloudfront.net/68c617854cfe77e04a52fe72_1757884648163_ac5431f6.png',
      title: 'Red Panda',
      category: 'Animals',
      likes: 298
    },
    {
      id: '5',
      original: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884721610_6aece889.webp',
      transformed: 'https://d64gsuwffb70l.cloudfront.net/68c617854cfe77e04a52fe72_1757884649287_f5846288.png',
      title: 'Fierce Bear',
      category: 'Animals',
      likes: 267
    },
    {
      id: '6',
      original: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884724218_55594943.webp',
      transformed: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884726125_e7a7eb33.webp',
      title: 'Wild Cat',
      category: 'Animals',
      likes: 145
    },
    {
      id: '7',
      original: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884728132_ccf360ea.webp',
      transformed: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884729912_44d1c467.webp',
      title: 'Ocean Creature',
      category: 'Marine',
      likes: 178
    },
    {
      id: '8',
      original: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884731671_618f73ce.webp',
      transformed: 'https://d64gsuwffb70l.cloudfront.net/68c730ed3fab79835160394e_1757884733423_89fa17c5.webp',
      title: 'Forest Bird',
      category: 'Birds',
      likes: 203
    }
  ];

  const categories = ['all', 'Animals', 'Marine', 'Birds'];
  const filteredTransformations = filter === 'all' 
    ? transformations 
    : transformations.filter(item => item.category === filter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transformation Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore stunning before-and-after transformations created by our AI. See what's possible with your artwork.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTransformations.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Before/After Images */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.original}
                      alt="Original"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Before
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={item.transformed}
                      alt="Transformed"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs">
                      After
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.category}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{item.likes}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Load More Transformations
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;